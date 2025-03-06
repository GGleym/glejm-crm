import {createJsonQuery, declareParams, unknownContract} from '@farfetched/core';

import {getBaseApiPrefix} from '~/api/get-base-api-path';
import {authHeaders} from '~/services/jwt-token-service';

import type {ProductsRes} from './types';

export const getSegmentsQuery = createJsonQuery({
  params: declareParams<{processId: string[]}>(),
  request: {
    method: 'GET',
    url: getBaseApiPrefix('/client/segment'),
    query: ({processId}) => ({processId}),
    headers: authHeaders,
  },
  response: {
    contract: unknownContract,
    mapData: ({result}) => result as {processId: string; segments: string[]}[],
  },
});

export const getProductsQuery = createJsonQuery({
  params: declareParams<{rboId: string}>(),
  request: {
    method: 'GET',
    url: ({rboId}) => `/premium-crm-api/api/v0/clients/${rboId}/products`,
  },
  response: {
    contract: unknownContract,
    mapData: ({result}) => result as ProductsRes,
  },
});
