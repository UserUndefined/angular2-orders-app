import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'

import {Home} from "./home.component";
import { homeRouting } from './home.routing';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    Home
  ],
  imports: [
    CommonModule,
    FormsModule,
    homeRouting,
    NgbModule
  ],
  providers: [
  ]
})
export class HomeModule{}
