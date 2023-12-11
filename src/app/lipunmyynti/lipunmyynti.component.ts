import { Component } from '@angular/core';
import { TilauksetService } from '../services/tilaukset.service';
import { emit } from 'process';

@Component({
  selector: 'app-lipunmyynti',
  templateUrl: './lipunmyynti.component.html',
  styleUrls: ['./lipunmyynti.component.css']
})
export class LipunmyyntiComponent {
  perus = 0;
  opiskelija = 0;
  elake = 0;
  member: any;
  etu = "";
  suku = "";
  eMail = "";
  hinta = 0;
  tilaus = new TilauksetService();
  uusiTilaus: any[] = [];
  constructor(public tilausService: TilauksetService) {
    this.tilaus.perusLiput = this.perus;
    this.tilaus.opiskelijaliput = this.opiskelija;
    this.tilaus.elakeLiput = this.elake;
    this.tilaus.eNimi = this.etu;
    this.tilaus.sNimi = this.suku;
    this.tilaus.email = this.eMail;
    this.tilaus.member = this.member;
    this.tilaus.hinta = this.hinta;
  }

  loppusumma(perus: number, opiskelija: number, elake: number) {
    if (this.tilaus.member) {
      this.tilaus.hinta = 0.85 * (perus * 16 + opiskelija * 10 + elake * 8);
    } else { this.tilaus.hinta = (perus * 16 + opiskelija * 10 + elake * 8); }

    return this.tilaus.hinta;
  }

  onSubmit(form: any) {
    //Tämä tallentaa tilauksen tiedot service-luokassa olevaan array:hin.
    this.tilausService.setTilaus([this.tilaus.perusLiput, this.tilaus.opiskelijaliput, this.tilaus.elakeLiput, this.tilaus.member, this.tilaus.eNimi, this.tilaus.sNimi, this.tilaus.email, this.tilaus.hinta]);
    //Tämä palauttaa arrayn tiedot.
    console.log(this.tilausService.getTilaus());
    //Tilauksen tietojen tulostus konsoliin:
    console.log("perusliput kpl: " + this.tilausService.getTilaus()[0]);
    console.log("opiskelijaliput kpl: " + this.tilausService.getTilaus()[1]);
    console.log("eläkeläisliput kpl: " + this.tilausService.getTilaus()[2]);
    console.log("tilaajan jäsenyystieto: " + this.tilausService.getTilaus()[3]);
    console.log("tilaajan nimi: " + this.tilausService.getTilaus()[4] + " " + this.tilausService.getTilaus()[5]);
    console.log("tilaajan sposti: " + this.tilausService.getTilaus()[6]);
    console.log("tilauksen loppusumma: " + this.tilausService.getTilaus()[7] + "€")
    //nollaa lomakkeen, virhelauseet jäävät näkyviin.. Tämä korjaantuisi reactive form tavalla tekemällä, mutta kerkesin tekemään template driven form tavalla.
    form.reset();
  }
}
