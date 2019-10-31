import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HelperService } from './services/helper.service';
@Injectable()
export class AuthService {
  constructor(public jwtHelper: JwtHelperService,private helperService: HelperService) {}
  userName:string;
  ngOnInit() {
    this.helperService.loggedUser.subscribe(data=>
      {
        this.userName=data;
      })
  }
  // ...
  public isAuthenticated(): boolean {
    //const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    //return !this.jwtHelper.isTokenExpired(token);
    if(this.userName == 'None'){
      return false;
    }
    else{
      return true;
    }
  }
}