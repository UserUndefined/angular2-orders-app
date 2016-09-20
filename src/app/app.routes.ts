import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { About } from './about';
import { NoContent } from './no-content';
import { OrderModule } from "./order";

import { DataResolver } from './app.resolver';


const appRoutes: Routes = [
  { path: '',      component: Home },
  { path: 'home',  component: Home },
  { path: 'about', component: About },
  //{ path: 'order', component: OrderModule },
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
  },
  { path: '**',    component: NoContent },
];

export const appRoutingProviders: any[] = [

];

export const ROUTES: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
