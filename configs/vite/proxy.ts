import {type HttpProxy, type ProxyOptions} from 'vite';
import {Logger} from 'tslog';

const logger = new Logger({name: 'retail-web', type: 'json'});

const baseProxyConfigBuilder =
  (customConfig?: (proxy: HttpProxy.Server, _options: ProxyOptions) => void) =>
  (proxy: HttpProxy.Server, _options: ProxyOptions) => {
    customConfig?.(proxy, _options);

    proxy.on('error', (err) => {
      logger.error('Ошибка проксирование: ', {err});
    });

    proxy.on('proxyReq', (proxyReq, req) => {
      logger.info('Отправлено сообщение: ', {
        method: req.method,
        url: req.url,
        headers: req.headers,
      });
    });

    proxy.on('proxyRes', (proxyRes, req) => {
      logger.info('Получено сообщение: ', {
        statusCode: proxyRes.statusCode,
        url: req.url,
        headers: req.headers,
      });
    });
  };

const baseProxy = baseProxyConfigBuilder();

export const proxyConfig = (config?: Record<string, string | ProxyOptions>) => ({
  ...config,
  '/pap/api/v1/': {
    target: 'https://mlc-api.ump-test.mbrd.ru:8091',
    changeOrigin: true,
    secure: false,
    configure: baseProxy,
    rewrite: (path) => path.replace(/^\/pap\/api\/v1/, ''),
  },
  '/pap/api/v2/': {
    target: 'https://mlc-api.ump-test.mbrd.ru:8091',
    changeOrigin: true,
    secure: false,
    configure: baseProxy,
    rewrite: (path) => path.replace(/^\/pap\/api\/v2/, ''),
  },
  '/auth': {
    target: 'https://site2-web-test01.mbrd.ru',
    changeOrigin: true,
    secure: false,
    configure: baseProxy,
    rewrite: (path) => path.replace(/^\/pap\/api\/v1/, ''),
  },
  '/premium-crm-api': {
    target: 'https://mlc-api.ump-test.mbrd.ru:8091',
    changeOrigin: true,
    secure: false,
    configure: baseProxy,
  },
});
