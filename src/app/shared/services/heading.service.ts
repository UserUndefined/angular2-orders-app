import { Injectable } from '@angular/core';

export class Heading {
  constructor(public value: string, public label: string){}
}

@Injectable()
export class HeadingService {
/*
  private items: Heading[] = [
    {value: 'Accountants', label: 'Accountants'},
    {value: 'Builders',label: 'Builders'},
    {value: 'Candlestick Makers',label: 'Candlestick Makers'},
    {value: 'Dentists',label: 'Dentists'},
    {value: 'Fishermen',label: 'Fishermen'},
    {value: 'Plumbers',label: 'Plumbers'}
  ];
*/
  private items: Heading[];

  constructor() {
    this.items = [
      new Heading('Accountants', 'Accountants'),
      new Heading('Builders', 'Builders'),
      new Heading('Candlestick Makers', 'Candlestick Makers'),
      new Heading('Dentists', 'Dentists'),
      new Heading('Fishermen', 'Fishermen'),
      new Heading('Plumbers', 'Plumbers')
    ];
  }

  getHeadings() {
    return this.items;
  }
}
