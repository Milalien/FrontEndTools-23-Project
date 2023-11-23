import { Component } from '@angular/core';
import { Question } from '../question';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  questions: Array<Question> = new Array;

  constructor(private questionsService: QuestionsService) {

    this.questions = questionsService.getQuestions();
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
