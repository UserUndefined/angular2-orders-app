import { Component, OnInit } from '@angular/core';
import {Area, AreaService, Product, ProductService, HeadingService, Heading} from "../shared/services";
import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'orderitem-new',
  templateUrl: './orderitem-new.component.html'
})
export class OrderItemNewComponent implements OnInit {

  dateNow: string;

  options: Observable<Heading>;

  areas: Observable<Area>;

  products: Observable<Product>;

  order =  {
    customer: {name: 'Test Name'},
    totalValue: 100,
    heading: new Heading('','')
  };

  errorMessage: string;

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
  constructor(private headingService: HeadingService, private areaService: AreaService, private productService: ProductService) {
  }

  ngOnInit() {
    // this.newItem.itemIndex = this.orderItemIndex;
    this.getHeadings();
    this.getAreas();
    this.getProducts();
    this.dateNow = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.info(this.dateNow);
    this.options = this.headingService.getHeadings();
  }

  getHeadings(){
    this.headingService.getHeadings()
      .subscribe(options => this.options = options,
        error => this.errorMessage = <any>error
      );
  }

  getAreas(){
    this.areaService.getAreas()
      .subscribe(options => this.options = options,
        error => this.errorMessage = <any>error
      );
  }

  getProducts(){
    this.productService.getProducts()
      .subscribe(options => this.options = options,
        error => this.errorMessage = <any>error
      );
  }
}
