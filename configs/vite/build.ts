import {type BuildOptions} from 'vite';
import path from 'path';

export const buildConfig = (config?: BuildOptions) => ({
  ...config,
  lib: config?.lib ?? {
    entry: path.resolve(__dirname, './src/index.ts'),
    name: 'pap-web-retail-host',
    fileName: (format) => `pap-web-retail-host.${format}.js`,
    formats: ['es', 'umd'],
  },
  rollupOptions: config?.rollupOptions ?? {
    external: ['react', 'react-dom', 'react/jsx-runtime'],
    output: {
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'react/jsx-runtime': 'react/jsx-runtime',
      },
    },
  },
  emptyOutDir: config?.emptyOutDir ?? true,
});
