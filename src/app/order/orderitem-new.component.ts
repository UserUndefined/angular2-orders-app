import { Component } from '@angular/core';
import {HeadingService} from "../shared/services/heading.service";

@Component({
  selector: 'orderitem-new',
  templateUrl: './orderitem-new.component.html'
})
export class OrderItemNewComponent {

  order = {customer: {name: 'Test Name'}};

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
    // this.areas = this.areaService.getAreas();
    // this.serviceProducts = this.serviceProductService.getServiceProducts();
    // const id = this.route.snapshot.params['id'];

    // this.questionService.findOne(id).subscribe(question => {
    //  this.question = question;
    // });
  }

}
