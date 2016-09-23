import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'customer-new',
  templateUrl: './customer-new.component.html'
})
export class CustomerNewComponent implements OnInit {

  customer: any;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }
}
