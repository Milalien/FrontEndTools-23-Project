import { Component } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.css']
})
export class TemplatedrivenformComponent {

  fName: string = "";
  lName: string = "";
  pID: string = "";
  email: string = "";
  userN: string = "";
  pWord: string = "";
  pWord2: string = "";
  cond: any;


  currentPerson: Person = new Person();

  constructor() {
    this.currentPerson.firstName = this.fName;
    this.currentPerson.lastName = this.lName;
    this.currentPerson.personId = this.pID;
    this.currentPerson.email = this.email;
    this.currentPerson.username = this.userN;
    this.currentPerson.password = this.pWord;
    this.currentPerson.password2 = this.pWord2;
    this.currentPerson.conditions = this.cond;

  }
  onSubmit(e: any) {
    console.log(e.value.firstName);
    console.log(e.controls['firstName'].status);
  }
}
