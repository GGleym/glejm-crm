import {concurrency, createJsonQuery, declareParams, unknownContract} from '@farfetched/core';

import {getBaseApiPrefix} from '~/api/get-base-api-path';
import {authHeaders} from '~/services/jwt-token-service';

import {type IndividualsQueryRes} from './types';

export const findCompaniesByInnQuery = createJsonQuery({
  params: declareParams<{query: string}>(),
  request: {
    method: 'POST',
    url: getBaseApiPrefix('/suggest/party'),
    body: ({query}) => ({
      count: 4,
      query,
      status: ['ACTIVE'],
    }),
    headers: authHeaders,
  },
  response: {
    contract: unknownContract,
  },
});

export const findIndividualsQuery = createJsonQuery({
  params: declareParams<{query: string; docType?: 'PASSPORT' | 'RBO'}>(),
  request: {
    method: 'GET',
    url: getBaseApiPrefix('/client/front-office'),
    query: ({query}) => ({
      serviceName: 'DOMAIN',
      identityDocType: 'PASSPORT',
      identityDocSeries: query.slice(0, 4),
      identityDocNumber: query.slice(4) ?? '',
    }),
    headers: authHeaders,
  },
  response: {
    contract: unknownContract,
    mapData: ({result}) => result as IndividualsQueryRes[],
  },
});

concurrency(findCompaniesByInnQuery, {
  strategy: 'TAKE_LATEST',
});
