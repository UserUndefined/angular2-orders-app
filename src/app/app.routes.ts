import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { About } from './about';
import { NoContent } from './no-content';
import { LoginComponent } from './login';

import { DataResolver } from './app.resolver';


const appRoutes: Routes = [
  { path: '',      component: Home },
  { path: 'home',  component: Home },
  { path: 'about', component: About },
  { path: 'login',  component: LoginComponent },
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
  },
  { path: '**',    component: NoContent }
];

export const appRoutingProviders: any[] = [

];

export const ROUTES: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
