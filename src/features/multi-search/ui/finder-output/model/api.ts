import {createJsonQuery, declareParams, unknownContract} from '@farfetched/core';
import {PartySuggest} from 'features/multi-search/lib/types';
import {TPassportSearchQueryRes} from './types';

// Поиск по ИНН организации
export const getPartiesQuery = createJsonQuery({
  params: declareParams<{query: string}>(),
  request: {
    method: 'POST',
    url: '/pap/api/v1/suggest/party',
    body: ({query}) => ({
      count: 4,
      query,
      status: ['ACTIVE'],
    }),
  },
  response: {
    contract: unknownContract,
    mapData: ({result}) => (result as {suggestions: PartySuggest}).suggestions,
  },
});

// Поиск по паспорту
export const getUserByPassportQuery = createJsonQuery({
  params: declareParams<{identityDocSeries: string; identityDocNumber: string}>(),
  request: {
    method: 'POST',
    url: '/pap/api/v1/client/front-office',
    body: (body) => ({
      ...body,
      identityDocType: 'PASSPORT',
      serviceName: 'DOMAIN',
    }),
  },
  response: {
    contract: unknownContract,
    mapData: ({result}) => result as TPassportSearchQueryRes,
  },
});

// Поиск по РБО-ИД
export const getUserByRBOQuery = createJsonQuery({
  params: declareParams<{id: string}>(),
  request: {
    method: 'POST',
    url: '/pap/api/v2/client',
    body: (body) => ({
      ...body,
      sourceData: 'RBO',
      serviceName: 'DOMAIN',
    }),
  },
  response: {
    contract: unknownContract,
    mapData: ({result}) => result as TPassportSearchQueryRes,
  },
});

// Получение кредитных заявок
export const getLoanIssuesByPassportQuery = createJsonQuery({
  params: declareParams<{id: string}>(),
  request: {
    method: 'POST',
    url: '/pap/api/v1/applications',
    body: (body) => ({
      ...body,
      offset: 0,
      limit: 13,
      filter: {
        participantFilter: {
          bankClients: {
            systemCode: 'RBO',
            clientId: body.id,
          },
        },
      },
    }),
  },
  response: {
    contract: unknownContract,
    mapData: ({result}) => result as TPassportSearchQueryRes,
  },
});
