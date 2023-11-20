import { Component } from '@angular/core';
import { Question } from './question';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  questions: Array<Question> = new Array;

  constructor() {
    this.questions =
      [new Question("How would you rate this class?"),
      new Question("Your rating of this school?"),
      new Question("How well are you motivated?"),
      new Question("How would you rate your skills?"),
      new Question("Your rating of the social enviroment?")];
  }
  onInputChange(event: any, question: Question) {
    console.log(event.target.value);
    switch (event.target.value) {

      case '1':
        question.description = "Terrible";
        break;
      case '2':
        question.description = "Bad";
        break;
      case '3':
        question.description = "Avarage";
        break;
      case '4':
        question.description = "Good";
        break;
      case '5':
        question.description = "Exellent";
        break;

    }
  }

}
