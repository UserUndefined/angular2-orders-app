import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'

import {OrderComponent} from "./order.component";
import {OrderItemNewComponent} from "./orderitem-new.component";
import {OrderItemListComponent} from "./orderitem-list.component";

import {AreaService, ProductService, HeadingService} from "../shared/services";

import { orderRouting } from './order.routing';

import {SelectModule} from 'angular2-select';

@NgModule({
  declarations: [
    OrderItemNewComponent,
    OrderItemListComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SelectModule,
    orderRouting
  ],
  providers: [
    AreaService,
    HeadingService,
    ProductService
  ]
})

export class OrderModule{}
