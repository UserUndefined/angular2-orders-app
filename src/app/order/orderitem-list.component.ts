import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'orderitem-list',
  templateUrl: './orderitem-list.component.html'
})
export class OrderItemListComponent implements OnInit {

  order =  {
    customer: {name: 'Test Name'},
    totalValue: 200
  };

  errorMessage: string;

  newItem: any;

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


  serviceProducts: {};

  areas: {};
*/
  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.newItem = {itemIndex: 0};
  }

  saveNewOrder(){
    console.info('saveNewOrder called');
  }
}
