import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class Product {
  constructor(public value: string, public label: string){}
}

@Injectable()
export class ProductService {

  constructor(private http: Http) {
  }

  httpErrorHandler(error: Response){
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  getProducts() {
    return this.http.get('https://generic-receiver-api.herokuapp.com/products/list')
      .map((res: Response) => <Product[]>res.json())
      .do(data => console.log(data))
      .catch(this.httpErrorHandler)
      ;
  }
}
