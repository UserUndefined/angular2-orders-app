import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderItemNewComponent } from "./orderitem-new.component";

const orderRoutes: Routes = [
  { path: 'order', component: OrderItemNewComponent }
];

export const orderRouting: ModuleWithProviders = RouterModule.forChild(orderRoutes);
