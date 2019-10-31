import { HelperService } from './../../services/helper.service';
import { HomeComponent } from './../home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { QuizComponent } from '../../quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';
import {LoginComponent} from '../login/login.component';
import { Route, RouterModule } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';


const ROUTES: Route[] = [
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  {path:'quiz',component:QuizComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
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
  providers: [QuizService,HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
