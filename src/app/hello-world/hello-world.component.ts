import { Component } from '@angular/core';


@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
})
export class HelloWorldComponent {
  helloworldTitle: string;
  itemImageUrl: string;
  itemImageUrl1: string;
  itemImageUrl2: string;
  titleMsg: string;

  constructor() {
    this.helloworldTitle = "Ensimmäinen harjoitus";
    this.itemImageUrl1 = "https://cdn.pixabay.com/photo/2023/09/14/19/14/landscape-8253576_1280.jpg";
    this.itemImageUrl2 = "https://cdn.pixabay.com/photo/2023/09/20/04/04/sea-urchin-8263832_1280.jpg";
    this.itemImageUrl = this.itemImageUrl1;
    this.titleMsg = "";
  }
  onButtonClicked() {
    if (this.itemImageUrl == this.itemImageUrl1) {
      this.itemImageUrl = this.itemImageUrl2;
    } else {
      this.itemImageUrl = this.itemImageUrl1;
    }
  }
}
