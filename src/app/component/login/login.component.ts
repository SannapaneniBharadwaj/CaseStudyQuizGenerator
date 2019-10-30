import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import data from '../../../data/userdetails.json';
import { ConsoleReporter } from 'jasmine';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    constructor(private router: Router){
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
            this.router.navigate(['./quiz']);
           // document.getElementById('errormessage').innerHTML = 'Username and password does not match';
            break;
        }
        if(i<=data.length)
        {
            this.errormessage="username or password does not match";
        }

        }   
    }
}
