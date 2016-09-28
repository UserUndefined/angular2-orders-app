import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Home } from "./home.component";

const homeRoutes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home }
];

export const homeRouting: ModuleWithProviders = RouterModule.forChild(homeRoutes);
