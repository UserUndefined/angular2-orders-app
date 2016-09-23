import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderComponent } from "./order.component";
import {AuthorisationService} from '../shared/services/authorisation.service';

const orderRoutes: Routes = [
  { path: 'order', component: OrderComponent, canActivate: [AuthorisationService] }
];

export const orderRouting: ModuleWithProviders = RouterModule.forChild(orderRoutes);
