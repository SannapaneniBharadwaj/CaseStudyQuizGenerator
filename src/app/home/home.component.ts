import { Component, OnInit } from '@angular/core';

import { QuizService } from '../services/quiz.service';
import { HelperService } from '../services/helper.service';
import { Option, Question, Quiz, QuizConfig } from '../models/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [QuizService,HelperService]
})
export class HomeComponent implements OnInit {

  quizes: any[];
  quizName: string;
  quizId: string;

  constructor(private quizService: QuizService,private helperService:HelperService) { }

  ngOnInit() {
    this.quizes = this.quizService.getAll();
    this.quizName = 'None';
  }

  select(quizName:string){
    //this.quizId = quizId;
    this.quizName = quizName;
    //console.log("Selected quizId" + quizId);
    console.log("Selected Quiz Name "+quizName);
    this.helperService.setQuizName(this.quizName);

  }

  goToQuiz() {
    console.log("Going to Quiz "+ this.quizName);
    }
  }

