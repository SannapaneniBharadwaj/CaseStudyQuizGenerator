import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { HelperService } from './services/helper.service';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private helperService: HelperService,public router: Router) {}
  userName:string;
  quiz:string;


  canActivate(): boolean {

    this.helperService.loggedUser.subscribe(data=>
      {
        this.userName=data;
      })

    console.log("In Can Activate");
    console.log(this.userName);
    if(this.userName == 'None'){
      console.log("returning false");
      this.router.navigate(['']);
      return false;
    }
    return true;
  }

  // canActivateQuiz(): boolean{
  //   this.helperService.loggedUser.subscribe(data=>
  //     {
  //       this.userName=data;
  //     })

  //   console.log("In Can Activate");
  //   console.log(this.userName);
  //   if(this.userName == 'None'){
  //     console.log("returning false");
  //     this.router.navigate(['']);
  //     return false;
  //   }
  //   return true;
  // }
}