import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.css' ]
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authenticationService: AuthenticationService) {
  }

  ngOnInit(){
    this.removeAuthenticationSettings();
  }

  login(event, userName, password) {
    event.preventDefault();
    this.authenticationService.login(userName, password)
      .subscribe(result => this.processLoginResult(result),
      error => this.processLoginFailure(JSON.stringify(<any>error))
    );
  }

  processLoginResult(result){
    if(result === true){
      this.router.navigate(['/home']);
    } else {
      this.processLoginFailure('Invalid logon');
    }
  }

  processLoginFailure(result){
    alert(result);
    console.log(result);
  }

  removeAuthenticationSettings(){
    localStorage.removeItem('order_app_token');
    localStorage.removeItem('order_app_profile');
  }
}
