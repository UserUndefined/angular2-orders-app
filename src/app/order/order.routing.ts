import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderComponent } from "./order.component";

const orderRoutes: Routes = [
  { path: 'order', component: OrderComponent }
];

export const orderRouting: ModuleWithProviders = RouterModule.forChild(orderRoutes);
