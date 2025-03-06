import {UserConfig} from 'vite';

import {serverConfig} from './server';
import {buildConfig} from './build';
import {pluginsConfig} from './plugins';

export const viteCfgs = (configs?: UserConfig): UserConfig => ({
  server: serverConfig(configs?.server),
  build: buildConfig(configs?.build),
  plugins: pluginsConfig(configs?.plugins),
});

export const defaultConfig = viteCfgs();
