import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'

import {OrderItemNewComponent} from "./orderitem-new.component";

import {AreaService} from "../shared/services/area.service";
import {HeadingService} from "../shared/services/heading.service";
import {ProductService} from "../shared/services/product.service";

import { orderRouting } from './order.routing';

import {SelectModule} from 'angular2-select';

@NgModule({
  declarations: [
    OrderItemNewComponent
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
