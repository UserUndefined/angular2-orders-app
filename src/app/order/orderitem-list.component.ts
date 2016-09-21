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
    totalValue: 200,
    services: []
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
    this.order.services = [
      {product: {name: 'test1', price: 21}, area: {name: 'aberdeen'}, heading: {name: 'abattoirs'}, advert: {}},
      {product: {name: 'test2', price: 22}, area: {name: 'bath'}, heading: {name: 'bbbbb'}, advert: {}},
      {product: {name: 'test3', price: 23}, area: {name: 'canterbury'}, heading: {name: 'candlestick makers'}, advert: {}},
      {product: {name: 'test4', price: 24}, area: {name: 'dullich'}, heading: {name: 'drain clearance'}, advert: {}},
      {product: {name: 'test5', price: 25}, area: {name: 'edinburgh'}, heading: {name: 'egg makers'}, advert: {}}
    ];
  }

  saveNewOrder(){
    console.info(JSON.stringify(this.order));
  }
}
