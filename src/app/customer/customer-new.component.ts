import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common'
import {Router, ActivatedRoute} from '@angular/router'
import {FormsModule} from '@angular/forms'

import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';

import {HeadingService, Heading} from "../shared/services";

@Component({
  selector: 'customer-new',
  templateUrl: './customer-new.component.html'
})
export class CustomerNewComponent implements OnInit {

  customer: any;
  headings = new Observable<Heading>();
  errorMessage: string;

  constructor(private router: Router, private route: ActivatedRoute, private headingService: HeadingService) {
  }

  ngOnInit() {
    this.customer = {};
    this.getHeadings();
  }

  getHeadings(){
    this.headingService.getHeadings()
      .subscribe(options => this.headings = options,
        error => this.errorMessage = <any>error
      );
  }

  submitCustomerNew(){
    console.info(JSON.stringify(this.customer));
  }

}
