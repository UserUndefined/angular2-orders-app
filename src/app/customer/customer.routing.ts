import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerNewComponent } from "./customer-new.component";
import {AuthorisationService} from '../shared/services/authorisation.service';

const customerRoutes: Routes = [
  { path: 'customer/new', component: CustomerNewComponent, canActivate: [AuthorisationService] }
];

export const customerRouting: ModuleWithProviders = RouterModule.forChild(customerRoutes);
