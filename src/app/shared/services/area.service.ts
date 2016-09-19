import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class Area {
  constructor(public value: string, public label: string){}
}

@Injectable()
export class AreaService {

  constructor(private http: Http) {
  }

  httpErrorHandler(error: Response){
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  getAreas() {
    return this.http.get('https://generic-receiver-api.herokuapp.com/areas/list')
      .map((res: Response) => <Area[]>res.json())
      .do(data => console.log(data))
      .catch(this.httpErrorHandler)
      ;
  }
}
