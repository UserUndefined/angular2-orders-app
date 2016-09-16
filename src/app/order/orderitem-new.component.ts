import { Component } from '@angular/core';
import {HeadingService} from "../shared/services/heading.service";
import * as moment from 'moment';

@Component({
  selector: 'orderitem-new',
  templateUrl: './orderitem-new.component.html'
})
export class OrderItemNewComponent {

  dateNow: string;

  order =  {
    customer: {name: 'Test Name'},
    totalValue: 100
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
      this.dateNow = moment().format('MMMM Do YYYY, h:mm:ss a');
      console.info(this.dateNow);
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
  public items:Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
    'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
    'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',
    'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',
    'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon',
    'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',
    'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',
    'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',
    'The Hague', 'Turin', 'Valencia', 'Vienna', 'Vilnius', 'Warsaw', 'Wrocław',
    'Zagreb', 'Zaragoza', 'Łódź'];

  private value:any = {};
  private _disabledV:string = '0';
  private disabled:boolean = false;

  private get disabledV():string {
    return this._disabledV;
  }

  private set disabledV(value:string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }

  public selected(value:any):void {
    console.log('Selected value is: ', value);
  }

  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }

  public typed(value:any):void {
    console.log('New search input: ', value);
  }

  public refreshValue(value:any):void {
    this.value = value;
  }

}
