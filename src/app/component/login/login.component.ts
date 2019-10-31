import { HelperService } from './../../services/helper.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import data from '../../../data/userdetails.json';
import { NavbarService } from '../../services/navbar.service';
import { LocationStrategy } from '@angular/common';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    form: FormGroup;
    //added to disable browser back button
    constructor(private router: Router, private helperService: HelperService,public nav : NavbarService,private location: LocationStrategy){
        history.pushState(null, null, window.location.href);  
        this.location.onPopState(() => {
         history.pushState(null, null, window.location.href);
        });  
   }

    username: string;
    password: string;
    errormessage:string;

    ngOnInit() {
        this.nav.hide();
    }

    public onLoginClick()
    {
       for(let i in data)
       {
        if(this.username == data[i].email && this.password == data[i].password)
        {
            this.helperService.setUserName(this.username);
            this.router.navigate(['./home']);
            console.log('xx' +this.username);
            
            break;
        }
        if(i.length<=data.length)
        {
            this.errormessage="username or password does not match";
        }

        }   
    }


}
