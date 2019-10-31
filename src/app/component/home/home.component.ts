import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { HelperService } from 'src/app/services/helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  //styleUrls: ['./home.component.css'],
  providers: []
})
export class HomeComponent implements OnInit {

  quizes: any[];
  quizName: string;
  quizId: string;
  userName:string;

  constructor(private quizService: QuizService,private helperService:HelperService,private router: Router) { }

  ngOnInit() {

    this.quizes = this.quizService.getAll();
    this.quizName = 'None';
  }

  select(quizName:string){
    //this.quizId = quizId;
    this.quizName = quizName;
    //console.log("Selected quizId" + quizId);
    console.log("Selected Quiz Name "+quizName);

  }

  goToQuiz() {
    console.log("Going to Quiz "+ this.quizName);
    this.router.navigate(['./quiz']);
    }
  }

