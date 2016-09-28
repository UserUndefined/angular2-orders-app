import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'

import {Home} from "./home.component";
import { homeRouting } from './home.routing';

import { Calendar } from './calendar'
import { BaFullCalendar } from '../shared/components';
import {CalendarService} from './calendar/calendar.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    Home,
    Calendar,
    BaFullCalendar
  ],
  imports: [
    CommonModule,
    FormsModule,
    homeRouting,
    NgbModule
  ],
  providers: [
    CalendarService
  ]
})
export class HomeModule{}
