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


const ROUTES: Route[] = [
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  {path:'quiz',component:QuizComponent}
]

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
