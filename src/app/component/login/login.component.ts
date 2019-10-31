import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import data from '../../../data/userdetails.json';
import { NavbarService } from '../../services/navbar.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    constructor(private router: Router,public nav : NavbarService){
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
            this.router.navigate(['./home']);
           // document.getElementById('errormessage').innerHTML = 'Username and password does not match';
            break;
        }
        else
        {
            this.errormessage="username or password does not match";
        }

        }   
    }
}
