import { Injectable } from '@angular/core';

export interface Heading {
  value?: string;
  label?: string;
}

@Injectable()
export class HeadingService {

  private items: Heading[] = [
    {value: 'Accountants', label: 'Accountants'},
    {value: 'Builders',label: 'Builders'},
    {value: 'Candlestick Makers',label: 'Candlestick Makers'},
    {value: 'Dentists',label: 'Dentists'},
    {value: 'Fishermen',label: 'Fishermen'},
    {value: 'Plumbers',label: 'Plumbers'}
  ];

  constructor() { }

  getHeadings() {
    return this.items;
  }
}
