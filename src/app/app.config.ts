import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { httpInterceptorProviders } from './interceptors';

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [
    ...httpInterceptorProviders,
    provideRouter(routes),
    provideClientHydration(),
    provideNzI18n(en_US),
    importProvidersFrom(FormsModule),
    importProvidersFrom(HttpClientModule),
    provideAnimations(),
    provideHttpClient(withFetch()),
    importProvidersFrom(
      NgxWebstorageModule.forRoot({ prefix: 'login', separator: '-' })
    ),
  ],
};
