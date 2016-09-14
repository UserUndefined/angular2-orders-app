import { Injectable } from '@angular/core';

export interface Heading {
  name?: string;
}

@Injectable()
export class HeadingService {

  private items: Heading[] = [
    {name: 'Accountants'},
    {name: 'Builders'},
    {name: 'Candlestick Makers'},
    {name: 'Dentists'},
    {name: 'Fishermen'},
    {name: 'Plumbers'}
  ];

  constructor() { }

  getHeadings() {
    return this.items;
  }
}
