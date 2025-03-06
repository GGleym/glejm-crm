// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {createJsonQuery} from '@farfetched/core';

import {jwtStores} from '~/services/jwt-token-service';

/**
 * Обертка над createJsonQuery с передачей access_token в headers
 */
export const createAuthJsonQuery: typeof createJsonQuery = ({request, ...restParams}) =>
  createJsonQuery({
    ...restParams,
    request: {
      ...request,
      headers: {
        ...request.headers,
        Authorization: `Bearer ${jwtStores.$accessToken.getState()}`,
      },
    },
  });
