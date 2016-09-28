import { Component, OnInit } from '@angular/core';

import { Calendar } from './calendar'

@Component({
  selector: 'dashboard',
  providers: [Calendar],
  styleUrls: [ './dashboard.style.css' ],
  templateUrl: './dashboard.template.html'
})
export class Dashboard {

  constructor(public calendar: Calendar) {
  }

  ngOnInit() {
  }
}
