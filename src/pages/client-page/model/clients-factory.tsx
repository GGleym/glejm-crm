import {combine, sample} from 'effector';
import {reshape} from 'patronum';
import {createFactory} from '@withease/factories';

import {isNullable} from '@mtsdengi/uikit-fintech';

import {formatDate} from '~/utils/formatDate';
import {ClientTabsProps} from '~/entities/physical-client/ui/physical-client-tabs';
import {getLoanApplicationsQuery} from '~/entities/issues/model/api';
import {getServicePackagesQuery, getServicesQuery} from '~/entities/service-packages/model/api';
import {findIndividualsQuery} from '~/features/multi-search/model/api';
import {IndividualsQueryRes} from '~/features/multi-search/model/types';

import {getAge} from '../lib/utils';

import {$clientsGate} from './bindings';
import {DOCUMENTS_TYPES_MAPPER} from './consts';
import {getProductsQuery, getSegmentsQuery} from './api';
import {countFundsSum, countProductsQuantity, prepareBorrowedFunds, prepareOwnFunds} from './utils';

export const createClientsFactory = createFactory(() => {
  const clientData = reshape<IndividualsQueryRes | undefined, ClientTabsProps>({
    source: findIndividualsQuery.$data.map((data) => data?.[0]),
    shape: {
      shortName: (data) => data?.name || '',
      dateOfBirth: (data) => formatDate(data?.dateOfBirth),
      age: (data) => getAge(data?.dateOfBirth || ''),
      series: (data) => data?.identityDocumentSeries || '',
      number: (data) => data?.identityDocumentNumber || '',
      gender: () => '',
      citizenship: () => '',
      email: (data) => data?.email || '',
      placeOfBirth: () => '',
      phoneNumber: (data) => data?.phone || '',
      rboId: (data) => data?.bankClients.find(({systemCode}) => systemCode === 'RBO')?.clientId || '',
      domainId: (data) => data?.bankClients.find(({systemCode}) => systemCode === 'DOMAIN')?.clientId || '',
      documentType: (data) =>
        DOCUMENTS_TYPES_MAPPER[(data?.identityDocumentType as keyof typeof DOCUMENTS_TYPES_MAPPER) || 'UNKNOWN'],
    },
  });

  const rboFilteredEvent = sample({
    clock: findIndividualsQuery.finished.success,
    filter: ({result}) => !!result[0].bankClients.find(({systemCode}) => systemCode === 'RBO'),
    fn: ({result}) => ({
      rboId: result[0].bankClients.find(({systemCode}) => systemCode === 'RBO')?.clientId || '',
    }),
  });

  // При получении данных по клиенту запросить сегменты
  sample({
    clock: findIndividualsQuery.finished.success,
    filter: ({result}) => result.some((client) => Boolean(client.processId)),
    fn: ({result}) => ({
      processId: result.reduce((arr: string[], client) => {
        if (client.processId) {
          arr.push(client.processId);
        }

        return arr;
      }, []),
    }),
    target: getSegmentsQuery.start,
  });

  // При получении данных клиента запросить продукты, пакеты услуг клиента
  sample({
    clock: rboFilteredEvent,
    target: [getProductsQuery.start, getServicesQuery.start, getServicePackagesQuery.start],
  });

  // При получении данных клиента запросить кредитные заявки клиента
  sample({
    clock: findIndividualsQuery.finished.success,
    fn: ({result}) => ({
      participantFilter: {
        bankClients: result[0].bankClients[0],
      },
    }),
    target: getLoanApplicationsQuery.start,
  });

  const $clientInfo = combine(getSegmentsQuery.$data, findIndividualsQuery.$data, (segmentsData, clientData) => {
    if (isNullable(segmentsData) || isNullable(clientData)) {
      return {
        comment: '',
        documentType: '',
        category: '',
        documentNumber: '',
        segment: '',
        managerName: '',
      };
    }

    const {comment, rboCategoryName, identityDocumentType, identityDocumentNumber, identityDocumentSeries} =
      clientData[0];
    // const {segments} = segmentsData[0];

    return {
      comment,
      documentType: DOCUMENTS_TYPES_MAPPER[(identityDocumentType as keyof typeof DOCUMENTS_TYPES_MAPPER) ?? 'UNKNOWN'],
      category: rboCategoryName.includes('VIP') ? 'VIP' : 'Бродяга',
      documentNumber: `${identityDocumentSeries} ${identityDocumentNumber}`,
      segment: '-',
      managerName: '-',
    };
  });

  const $products = getProductsQuery.$data.map((products) => {
    if (isNullable(products)) {
      return {
        productsQuantity: 0,
        ownFunds: {
          overallSum: 0,
          products: [],
        },
        borrowedFunds: {
          overallSum: 0,
          products: [],
        },
      };
    }

    const {investments, accounts, cards, loans, balances} = products;
    const {debetAmount, accountAmount, investmentAmount, creditAmount, creditCardAmount, loanAmount, debetCardAmount} =
      balances;

    const ownFundsSum = countFundsSum(debetAmount, accountAmount, investmentAmount, debetCardAmount);
    const borrowedFundsSum = countFundsSum(creditAmount, creditCardAmount, loanAmount);

    const ownFunds = prepareOwnFunds(
      {products: cards, balances: debetCardAmount},
      {products: accounts, balances: accountAmount},
      {products: investments, balances: investmentAmount},
    );
    const borrowedFunds = prepareBorrowedFunds({products: loans, balances: loanAmount});

    const productsQuantity = countProductsQuantity(investments, accounts, cards, loans);

    return {
      productsQuantity,
      ownFunds: {
        overallSum: ownFundsSum,
        products: ownFunds,
      },
      borrowedFunds: {
        overallSum: borrowedFundsSum,
        products: borrowedFunds,
      },
    };
  });

  const $loanApplicationsQuantity = getLoanApplicationsQuery.$data.map((data) => {
    if (!data) {
      return 0;
    }

    return data.applicationMain?.length;
  });

  return {
    $clientsGate,

    stores: {
      clientData,

      $products,
      $clientInfo,
      $loanApplicationsQuantity,
    },
  };
});
