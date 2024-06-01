import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideToastr } from "ngx-toastr";
import { provideAnimations } from "@angular/platform-browser/animations";
import { HTTP_INTERCEPTORS, provideHttpClient } from "@angular/common/http";
import { ErrorHandlerInterceptor } from "./interceptors/error-handler.interceptor";
import { JwtModule } from '@auth0/angular-jwt';
import { JwtInterceptor } from './interceptors/jwt.interceptor';

export function tokenGetter() {
  return localStorage.getItem("token");
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideToastr(),
    provideHttpClient(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: ErrorHandlerInterceptor, 
      multi: true
    },
    importProvidersFrom(
      JwtModule.forRoot({ 
        config: {
        tokenGetter: tokenGetter
      }})),
  ]
};
