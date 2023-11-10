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
      [new Question("Arviosi tästä koulusta"),
      new Question("Arviosi tästä kurssista"),
      new Question("Arviosi motivaatiotasostasi"),
      new Question("Arviosi ilmapiiristä"),
      new Question("Arviosi elämänlaadustasi")];
  }
  onInputChange(event: any, question: Question) {
    console.log(event.target.value);
    switch (event.target.value) {

      case '1':
        question.description = "Kaamea";
        break;
      case '2':
        question.description = "Huono";
        break;
      case '3':
        question.description = "Keskiverto";
        break;
      case '4':
        question.description = "Hyvä";
        break;
      case '5':
        question.description = "Erinomainen";
        break;

    }
  }

}
