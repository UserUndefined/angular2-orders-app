import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class Heading {
  constructor(public value: string, public label: string){}
}

@Injectable()
export class HeadingService {

  constructor(private http: Http) {
  }

  httpErrorHandler(error: Response){
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  getHeadings() {
    return this.http.get('https://generic-receiver-api.herokuapp.com/headings/list')
      .map((res: Response) => <Heading[]>res.json())
      .do(data => console.log(data))
      .catch(this.httpErrorHandler)
      ;
  }
}
