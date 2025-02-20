import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { authInterceptor } from './interceptors/authInterceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Router config eklenebilir.
    provideHttpClient(withInterceptors([authInterceptor])), // Interceptor'u ekliyoruz
  ],
};
