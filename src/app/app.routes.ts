import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {RegisterFormComponent} from "./components/sign-form/register-form.component";
import {LoginFormComponent} from "./components/login-form/login-form.component";
import {ServerErrorComponent} from "./components/error-pages/server-error/server-error.component";
import {NotFoundComponent} from "./components/error-pages/not-found/not-found.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'server-error', component: ServerErrorComponent },
  { path: 'not-found', component: NotFoundComponent }
];
