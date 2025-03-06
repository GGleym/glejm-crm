const BASE_API_PREFIX = '/pap/api/';

export const getBaseApiPrefix = (url: string, version: 'v1' | 'v2' = 'v1') => `${BASE_API_PREFIX}${version}${url}`;
