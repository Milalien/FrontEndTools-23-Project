import { Injectable } from '@angular/core';
import { Question } from '../question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }

  getQuestions() {
    return [new Question("How would you rate this class?"),
    new Question("Your rating of this school?"),
    new Question("How well are you motivated?"),
    new Question("How would you rate your skills?"),
    new Question("Your rating of the social enviroment?")];
  }
}
