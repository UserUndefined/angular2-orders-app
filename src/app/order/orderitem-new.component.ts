import { Component, OnInit } from '@angular/core';
import {HeadingService, Heading} from "../shared/services/heading.service";
import * as moment from 'moment';

@Component({
  selector: 'orderitem-new',
  templateUrl: './orderitem-new.component.html'
})
export class OrderItemNewComponent implements OnInit {

  dateNow: string;

  options = [];

  order =  {
    customer: {name: 'Test Name'},
    totalValue: 100,
    heading: new Heading('','')
  };

  // orderItemIndex: 0;
/*
  order: Order = {
    customer: {
      name: 'Test Customer',
      postcode: 'TE5 T01'
    },
    services: [],
    totalValue: 0
  };

  orderItemsStatus: orderItemsStatus;

  newItem: {itemIndex: 0};

  serviceProducts: {};

  areas: {};
*/
  constructor(private headingService: HeadingService) {
  }

  ngOnInit() {
    // this.newItem.itemIndex = this.orderItemIndex;
    this.dateNow = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.info(this.dateNow);
    this.options = this.headingService.getHeadings();
  }
}
