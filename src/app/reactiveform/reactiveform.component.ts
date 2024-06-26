
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Person } from '../person';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})

export class ReactiveformComponent {
  ProfileForm: FormGroup;

  fName: string = "";
  lName: string = "";
  pID: string = "";
  eMail: string = "";
  userN: string = "";
  pWord: string = "";
  pWord2: string = "";
  cond: boolean = false;

  person: Person = new Person();

  constructor() {

    this.person.firstName = this.fName;
    this.person.lastName = this.lName;
    this.person.personId = this.pID;
    this.person.email = this.eMail;
    this.person.username = this.userN;
    this.person.password = this.pWord;
    this.person.password2 = this.pWord2;
    this.person.conditions = this.cond;

    this.ProfileForm = new FormGroup({
      firstname: new FormControl(this.person.firstName, [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z ]*$')]),
      lastname: new FormControl(this.person.lastName, [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z ]*$')]),
      personId: new FormControl(this.person.personId, [Validators.required, Validators.minLength(11), Validators.pattern('[0-9]{6}(|[0-9]{2}|[-A][0-9]{3}[0123456789ABCDEFHJKLMNPRSTUVWXY])')]),
      email: new FormControl(this.person.email, [Validators.required, Validators.email]),
      username: new FormControl(this.person.username, [Validators.required, Validators.minLength(5)]),
      password: new FormControl(this.person.password, [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!=.*\\s).{8,}$')]),
      password2: new FormControl(this.person.password2, [Validators.required]),
      conditions: new FormControl(this.person.conditions, [Validators.requiredTrue])
    });
  }
  get firstname() {
    return this.ProfileForm.get('firstname');
  }
  get lastname() {
    return this.ProfileForm.get('lastname');
  }
  get personId() {
    return this.ProfileForm.get('personId');
  }
  get email() {
    return this.ProfileForm.get('email');
  }
  get username() {
    return this.ProfileForm.get('username');
  }
  get password() {
    return this.ProfileForm.get('password');
  }
  get password2() {
    return this.ProfileForm.get('password2');
  }
  get conditions() {
    return this.ProfileForm.get('conditions');
  }

  onSubmit() {
    console.log('Etunimi: ' + this.ProfileForm.value.firstname);
    console.log('Sukunimi: ' + this.ProfileForm.value.lastName);
    console.log('Käyttäjätunnus: ' + this.ProfileForm.value.username);

  }
}
