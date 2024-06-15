import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {RegisterFormComponent} from "./components/sign-form/register-form.component";
import {LoginFormComponent} from "./components/login-form/login-form.component";
import {ServerErrorComponent} from "./components/error-pages/server-error/server-error.component";
import {NotFoundComponent} from "./components/error-pages/not-found/not-found.component";
import { ClubsViewComponent } from './components/features/clubs/clubs-view/clubs-view.component';
import { ClubViewComponent } from './components/features/clubs/club-view/club-view.component';
import { PlayerViewComponent } from './components/features/players/player-view/player-view.component';
import { LeaguesListComponent } from './components/features/championships/leagues-list/leagues-list.component';
import { ChampionshipViewComponent } from './components/features/championships/championship-view/championship-view.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'server-error', component: ServerErrorComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'clubs', component: ClubsViewComponent },
  { path: 'clubs/:id', component: ClubViewComponent },
  { path: 'players/:id', component: PlayerViewComponent },
  { path: 'leagues', component: LeaguesListComponent },
  { path: 'championships/:id', component: ChampionshipViewComponent }
];
