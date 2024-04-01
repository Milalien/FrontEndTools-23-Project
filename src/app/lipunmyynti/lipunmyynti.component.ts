import { Component } from '@angular/core';
import { TilauksetService } from '../services/tilaukset.service';
import { Tilaus } from '../tilaus';


@Component({
  selector: 'app-lipunmyynti',
  templateUrl: './lipunmyynti.component.html',
  styleUrls: ['./lipunmyynti.component.css']
})
export class LipunmyyntiComponent {

  tilaus = new Tilaus();

  constructor(public tilausService: TilauksetService) {

  }

  loppusumma(perus: number, opiskelija: number, elake: number) {
    if (this.tilaus.member) {
      this.tilaus.hinta = 0.85 * (perus * 16 + opiskelija * 10 + elake * 8);
    } else { this.tilaus.hinta = (perus * 16 + opiskelija * 10 + elake * 8); }

    return this.tilaus.hinta;
  }

  onSubmit(form: any) {
    //Tämä tallentaa tilauksen tiedot service-luokassa olevaan taulukkoon.
    this.tilausService.postTilaus(this.tilaus);
    //Tämä palauttaa koko taulukon.
    console.log(this.tilausService.getTilaukset());
    //Tilauksen tietojen tulostus konsoliin:
    console.log("perusliput kpl: " + this.tilausService.getTilaus()?.perusLiput);
    console.log("opiskelijaliput kpl: " + this.tilausService.getTilaus()?.opiskelijaliput);
    console.log("eläkeläisliput kpl: " + this.tilausService.getTilaus()?.elakeLiput);
    console.log("tilaajan jäsenyystieto: " + this.tilausService.getTilaus()?.member);
    console.log("tilaajan nimi: " + this.tilausService.getTilaus()?.eNimi + " " + this.tilausService.getTilaus()?.sNimi);
    console.log("tilaajan sposti: " + this.tilausService.getTilaus()?.email);
    console.log("tilauksen loppusumma: " + this.tilausService.getTilaus()?.hinta + "€")

    form.reset();
  }
}
