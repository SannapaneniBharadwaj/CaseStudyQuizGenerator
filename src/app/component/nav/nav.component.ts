import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private helperService: HelperService) { }
userName:string;
  ngOnInit() {
    this.helperService.loggedUser.subscribe(data=>
      {
        this.userName=data;
      })
      console.log('username is' + this.userName);
  }

}
