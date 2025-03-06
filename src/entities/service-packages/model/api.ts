import {createJsonQuery, declareParams, unknownContract} from '@farfetched/core';

import {authHeaders} from '~/services/jwt-token-service';

import type {ServicePackagesRes, ServicesRes} from './types';

export const getServicePackagesQuery = createJsonQuery({
  params: declareParams<{rboId: string}>(),
  request: {
    method: 'GET',
    url: ({rboId}) => `/premium-crm-api/api/v0/clients/${rboId}/packages`,
    headers: authHeaders,
  },
  response: {
    contract: unknownContract,
    mapData: ({result}) => result as ServicePackagesRes,
  },
});

export const getServicesQuery = createJsonQuery({
  params: declareParams<{rboId: string}>(),
  request: {
    method: 'GET',
    url: ({rboId}) => `/premium-crm-api/api/v0/clients/${rboId}/services`,
    headers: authHeaders,
  },
  response: {
    contract: unknownContract,
    mapData: ({result}) => result as ServicesRes,
  },
});
