import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { hmrBootstrap } from './hmr';

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);
if (environment.production) {
  enableProdMode();
} else {
  if (environment.hmr) {
    // tslint:disable-next-line:no-string-literal
    if (module['hot']) {
      hmrBootstrap(module, bootstrap);
    } else {
      console.log('Amm..HMR is not enabled for webpack');
    }
  } else {
    bootstrap();
  }
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
