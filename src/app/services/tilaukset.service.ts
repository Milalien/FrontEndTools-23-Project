import { Injectable } from '@angular/core';
import { Tilaus } from '../tilaus';

@Injectable({
  providedIn: 'root'
})
export class TilauksetService {
  //Toimii tilausten tallennuspaikkana mallin vuoksi, kun back-endiä ei ole.
  tilaukset: Tilaus[] = [];

  constructor() {

  }

  //Tallettaa tilauksen tiedot Tilaus-tyyppiseen taulukkoon.
  postTilaus(tilausTiedot: Tilaus) {
    this.tilaukset.push(tilausTiedot);
  }
  //Palauttaa koko tilaukset -taulukon sisällön.
  getTilaukset() {
    return this.tilaukset;
  }
  //Palauttaa viimeisimmän tilauksen mallin vuoksi, jotta saamme tässä vaiheessa ulos juuri tekemämme tilauksen.
  getTilaus() {
    return this.tilaukset.at(-1);
  }
}
