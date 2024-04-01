import { Injectable } from '@angular/core';
import { Question } from '../question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }

  getQuestions() {
    return [new Question("Miten arvioisit tämän kurssin?"),
    new Question("Miten arvioisit tämän koulun?"),
    new Question("Mikä on motivaatiotasosi?"),
    new Question("Miten arvioisit taitojesi tason?"),
    new Question("Miten arvioisit koulumme ilmapiirin?")];
  }
}
