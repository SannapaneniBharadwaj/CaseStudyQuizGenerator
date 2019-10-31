import { HelperService } from './../../services/helper.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import data from '../../../data/userdetails.json';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    constructor(private router: Router, private helperService: HelperService){
    }

    username: string;
    password: string;
    errormessage:string;
    
    public onLoginClick()
    {
       for(let i in data)
       {
        if(this.username == data[i].email && this.password == data[i].password)
        {
            this.router.navigate(['./home']);
            this.helperService.setUserName(this.username);
            break;
        }
        if(i.length<=data.length)
        {
            this.errormessage="username or password does not match";
        }

        }   
    }
}
