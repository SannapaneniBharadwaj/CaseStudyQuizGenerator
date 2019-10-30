import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './../home/home.component';
import {LoginComponent} from '../login/login.component';
import { QuizComponent } from 'src/app/quiz/quiz.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path:'',component: LoginComponent},
  {path:'quiz',component: QuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
