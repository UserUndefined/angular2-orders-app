import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http, private router: Router){
  }

  login(userName, password) {
    let body = JSON.stringify({ userName, password });
    return this.http.post('https://generic-receiver-api.herokuapp.com/auth/logon', body, { headers: this.getContentHeaders() })
      .map(
        response => {
          localStorage.setItem('order_app_token', response.json().accessToken);
          localStorage.setItem('order_app_profile', JSON.stringify(response.json()));
          return true;
        },
        error => {
          console.log(error.text());
          return false;
        }
      );
  }

  logout() {
    localStorage.removeItem('order_app_token');
    localStorage.removeItem('order_app_profile');
    this.router.navigate(['Login']);
  }

  getContentHeaders(){
    const contentHeaders = new Headers();
    contentHeaders.append('Accept', 'application/json');
    contentHeaders.append('Content-Type', 'application/json');
    return contentHeaders;
  }

  checkCredentials(){
    if (localStorage.getItem('order_app_token') === null){
      this.router.navigate(['Login']);
    }
  }
}
