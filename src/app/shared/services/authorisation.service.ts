import { Injectable, OnInit }  from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthorisationService implements CanActivate, OnInit {

  ngOnInit(){
    this.authorise();
  }

  authorise(){
    let app_token = localStorage.getItem('order_app_token');
    let app_profile = localStorage.getItem('order_app_profile');
    if (!app_token || !app_profile){
      this.removeAuthenticationSettings();
      this.isAuthorised = false;
      return;
    }
    console.log(JSON.stringify(app_token));
    console.log(JSON.stringify(app_profile));
    console.log('AuthorisationService called');
    this.isAuthorised = true;
  }

  canActivate() {
    this.authorise();
    if (!this.isAuthorised){
      return false;
    }
    return true;
  }

  removeAuthenticationSettings(){
    localStorage.removeItem('order_app_token');
    localStorage.removeItem('order_app_profile');
  }

  isAuthorised: boolean;
}
