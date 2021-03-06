import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  
  quizName = 'None';
  quizNameObs:BehaviorSubject<string>;
  loggedUser:BehaviorSubject<string>;
  
  constructor(){
    this.quizNameObs = new BehaviorSubject<string>(this.quizName);
    this.loggedUser=new BehaviorSubject('None');
  }

  setQuizName(quizNName:string){
    //console.log(this.quizName);
    this.quizName = quizNName;
    this.quizNameObs = new BehaviorSubject<string>(this.quizName);
    console.log(this.quizName);
  }
  setUserName(uname:string)
  {
    this.loggedUser.next(uname);
    console.log(uname);
  }
  static toBool(val) {
    if (val === undefined || val === null || val === '' || val === 'false' || val === 'False') {
      return false;
    } else {
      return true;
    }
  }

  static shuffle(array) {
    let currentIndex = array.length, temp, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temp = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temp;
    }
    return array;
  }
  static extend(out) {
    out = out || {};

    for (let i = 1; i < arguments.length; i++) {
      if (!arguments[i]) {
        continue;
      }

      for (const key in arguments[i]) {
        if (arguments[i].hasOwnProperty(key)) {
          out[key] = arguments[i][key];
        }
      }
    }
    return out;
  }
}
