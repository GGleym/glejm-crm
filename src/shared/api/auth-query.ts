import {createQuery} from '@farfetched/core';

export const loginQuery = createQuery({
  handler: async ({username, password}: {username: string; password: string}) => {
    const credentials = new URLSearchParams({
      grant_type: 'password',
      scope: 'openid',
      client_id: 'front-office',
      username,
      password,
    });

    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: credentials.toString(),
    };

    const authRes = await fetch(
      `https://mlc.ump-test.mbrd.ru:8091/mlc/api/auth/realms/mlc/protocol/openid-connect/token`,
      options,
    );

    return authRes.json();
  },
});

export const refreshTokenQuery = createQuery({
  handler: async ({token}: {token?: string}): Promise<{access_token: string; refresh_token: string}> => {
    const credentials = new URLSearchParams({
      grant_type: 'refresh_token',
      client_id: 'front-office',
      refresh_token: token ?? '',
    });

    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: credentials.toString(),
    };

    const authRes = await fetch(
      `https://mlc.ump-test.mbrd.ru:8091/mlc/api/auth/realms/mlc/protocol/openid-connect/token`,
      options,
    );

    return authRes.json();
  },
});
