import { Config } from '@stencil/core';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';
import { sass } from '@stencil/sass';

const angularValueAccessorBindings: ValueAccessorConfig[] = [];

export const config: Config = {
  namespace: 'fresh-living-components',
  plugins: [
    sass({
      includePaths: ['node_modules'],
    }),
  ],
  devServer: {
    reloadStrategy: 'pageReload'
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: 'fresh-living',
      directivesProxyFile: '../fresh-living-angular/src/directives/proxies.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
  ],
};
