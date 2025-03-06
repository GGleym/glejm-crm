import {createFactory} from '@withease/factories';
import {reshape} from 'patronum';
import {v4 as uuid} from 'uuid';

import {isNotNullable, isNullable} from '@mtsdengi/uikit-fintech';

import {getValueWithDashFallback} from '~/utils/getValuesWithDashFallback';

import {getServicePackagesQuery, getServicesQuery} from './api';
import {PRIVILEGES_MAPPER} from './consts';
import {getPackageInfo, preparePackageInfo} from './utils';

export const createServicePackagesFactory = createFactory(() => {
  const {$current, $history} = reshape({
    source: getServicePackagesQuery.$data,
    shape: {
      $current: (data) => data?.packages.find(({closeDateTime}) => isNullable(closeDateTime)),
      $history: (data) => data?.packages.filter(({closeDateTime}) => isNotNullable(closeDateTime)),
    },
  });

  const $currentPackageInfo = getPackageInfo($current);
  const $historyPackagesInfo = $history.map((packages) => {
    if (isNullable(packages)) {
      return [];
    }

    return packages.map(preparePackageInfo);
  });

  const $serviceTerms = getServicesQuery.$data.map((data) => {
    if (isNullable(data)) {
      return [];
    }

    const {serviceClass, financials} = data;
    const {lastSumBalance, currentSumBalance, prognosisSumBalance, currentSumTransactions} = financials;

    return [
      {id: uuid(), caption: 'Текущий уровень', label: getValueWithDashFallback(serviceClass.levelName)},
      {id: uuid(), caption: 'Остаток в прошлом месяце', label: getValueWithDashFallback(lastSumBalance)},
      {id: uuid(), caption: 'Текущий остаток', label: getValueWithDashFallback(currentSumBalance)},
      {id: uuid(), caption: 'Прогнозируемый остаток', label: getValueWithDashFallback(prognosisSumBalance)},
      {id: uuid(), caption: 'Траты по картам', label: getValueWithDashFallback(currentSumTransactions)},
    ];
  });

  const $additionalServices = getServicesQuery.$data.map((data) => {
    if (isNullable(data)) {
      return [];
    }

    return data.services.map(({code, value}) => ({
      id: uuid(),
      checked: !!value && value === 'true',
      label: PRIVILEGES_MAPPER[code as keyof typeof PRIVILEGES_MAPPER],
    }));
  });

  const $privileges = getServicesQuery.$data.map((data) => {
    if (isNullable(data)) {
      return [];
    }

    return data.privileges.map(({value}) => ({...value}));
  });

  return {
    stores: {
      $history,

      $privileges,
      $currentPackageInfo,
      $historyPackagesInfo,
      $serviceTerms,
      $additionalServices,
    },
  };
});
