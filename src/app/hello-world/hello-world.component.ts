import { Component } from '@angular/core';


@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
})
export class HelloWorldComponent {
  helloworldTitle: string;
  constructor() {
    this.helloworldTitle = "Ensimmäinen harjoitus"
  }
}
