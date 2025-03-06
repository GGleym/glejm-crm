import {type ServerOptions} from 'vite';

import {proxyConfig} from './proxy';

export const serverConfig = (config?: ServerOptions) => ({
  ...config,
  proxy: proxyConfig(config?.proxy),
  port: config?.port ?? 8080,
});
