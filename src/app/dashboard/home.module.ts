import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'

import {Home} from "./home.component";

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
    orderRouting,
    NgbModule
  ],
  providers: [
    AreaService,
    HeadingService,
    ProductService,
    AuthorisationService
  ]
})

export class OrderModule{}
