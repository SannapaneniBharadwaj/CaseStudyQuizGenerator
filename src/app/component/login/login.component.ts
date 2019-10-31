import { HelperService } from './../../services/helper.service';
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
    constructor(private router: Router, private helperService: HelperService,public nav : NavbarService){
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
