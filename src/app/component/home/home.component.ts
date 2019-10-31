import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { QuizService } from '../../services/quiz.service';
import { HelperService } from '../../services/helper.service';
import { Option, Question, Quiz, QuizConfig } from '../../models/index';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: []
})
export class HomeComponent implements OnInit {

  quizes: any[];
  quizName: string;
  quizId: string;

  constructor(private quizService: QuizService,private helperService:HelperService,private router: Router,public nav : NavbarService) { }

  ngOnInit() {
    this.nav.show();
    this.quizes = this.quizService.getAll();
    this.quizName = 'None';
  }

  select(quizName:string){
    //this.quizId = quizId;
    this.quizName = quizName;
    //console.log("Selected quizId" + quizId);
    console.log("Selected Quiz Name "+quizName);
    this.helperService.setQuizName(quizName);
  }

  goToQuiz() {
    console.log("Going to Quiz "+ this.quizName);
    this.helperService.setQuizName(this.quizName)
    this.router.navigate(['./quiz']);
    }
  }

