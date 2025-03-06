import {createJsonQuery, declareParams, unknownContract} from '@farfetched/core';

import {getBaseApiPrefix} from '~/api/get-base-api-path';
import {authHeaders} from '~/services/jwt-token-service';

import type {ShortApplication, LoanApplicationsFilter} from './types';
import {DEFAULT_LOAN_APPLICATIONS_REQUEST} from './consts';

export const getLoanApplicationsQuery = createJsonQuery({
  params: declareParams<LoanApplicationsFilter>(),
  request: {
    method: 'POST',
    url: getBaseApiPrefix('/applications'),
    body: (body) => ({
      ...body,
      ...DEFAULT_LOAN_APPLICATIONS_REQUEST,
    }),
    headers: authHeaders,
  },
  response: {
    contract: unknownContract,
    mapData: ({result}) =>
      result as {
        limit: number;
        offset: number;
        applicationMain: ShortApplication[] | null;
      },
  },
});
