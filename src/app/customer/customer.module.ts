import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'

import {CustomerNewComponent} from "./customer-new.component";

import { customerRouting } from './customer.routing';

import {SelectModule} from 'angular2-select';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AuthorisationService} from '../shared/services/authorisation.service';

@NgModule({
  declarations: [
    CustomerNewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SelectModule,
    customerRouting,
    NgbModule
  ],
  providers: [
    AuthorisationService
  ]
})

export class CustomerModule{}
