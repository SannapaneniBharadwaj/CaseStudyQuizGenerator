import { HelperService } from './../../services/helper.service';
import { HomeComponent } from './../home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { QuizComponent } from '../../quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';

import {NavComponent} from './../nav/nav.component';

import {LoginComponent} from '../login/login.component';
import { Route, RouterModule } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import { NavbarService } from '../../services/navbar.service';


import { AuthGuardService as AuthGuard } from '../../auth-guard.service';
import { AuthService } from 'src/app/auth.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

const ROUTES: Route[] = [
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent,canActivate: [AuthGuard]},
  {path:'quiz',component:QuizComponent,canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    NavComponent,
    LoginComponent,

    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [HelperService,QuizService,,NavbarService,AuthGuard,AuthService,JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
