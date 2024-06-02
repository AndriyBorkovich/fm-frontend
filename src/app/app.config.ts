import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideToastr } from "ngx-toastr";
import { provideAnimations } from "@angular/platform-browser/animations";
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { ErrorHandlerInterceptor } from "./interceptors/error-handler.interceptor";
import { JwtModule } from '@auth0/angular-jwt';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { IMAGE_CONFIG } from '@angular/common';

export function tokenGetter() {
  return localStorage.getItem("token");
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideToastr(),
    provideHttpClient(withInterceptorsFromDi()),
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: ErrorHandlerInterceptor, 
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true, 
        disableImageLazyLoadWarning: true
      }
    },
    importProvidersFrom(
      JwtModule.forRoot({ 
        config: {
        tokenGetter: tokenGetter
      }})),
    provideAnimationsAsync()
  ]
};
