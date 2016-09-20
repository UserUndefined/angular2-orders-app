import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

import {Area, AreaService, Product, ProductService, HeadingService, Heading} from "../shared/services";
import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'orderitem-new',
  templateUrl: './orderitem-new.component.html'
})
export class OrderItemNewComponent implements OnInit {

  dateNow: string;

  headings = new Observable<Heading>();

  areas = new Observable<Area>();

  products = new Observable<Product>();

  order =  {
    customer: {name: 'Test Name'},
    totalValue: 100,
    heading: new Heading('','')
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
  constructor(private router: Router, private route: ActivatedRoute, private headingService: HeadingService, private areaService: AreaService, private productService: ProductService) {
  }

  ngOnInit() {
    // this.newItem.itemIndex = this.orderItemIndex;
    this.getHeadings();
    this.getAreas();
    this.getProducts();
    this.dateNow = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.info(this.dateNow);
    this.newItem = {itemIndex: 0};
  }

  getHeadings(){
    this.headingService.getHeadings()
      .subscribe(options => this.headings = options,
        error => this.errorMessage = <any>error
      );
  }

  getAreas(){
    this.areaService.getAreas()
      .subscribe(options => this.areas = options,
        error => this.errorMessage = <any>error
      );
  }

  getProducts(){
    this.productService.getProducts()
      .subscribe(options => this.products = options,
        error => this.errorMessage = <any>error
      );
  }

  addNewService(event){
    console.info(JSON.stringify(this.newItem));
  }
}
