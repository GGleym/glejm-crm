export const APP_CONFIG = {
  API_AUTH_URL: '/mlc/api/auth',
  BASE_API_URL: '/mlc/api/v1',
  BASE_API_URL_V2: '/mlc/api/v2',

  ENDPOINTS: {
    dadata: {
      FIO: '/suggest/fio',
      ADDRESS: '/suggest/address',
    },
  },
} as const;
