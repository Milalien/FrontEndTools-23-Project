import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TilauksetService {
  perusLiput: number;
  opiskelijaliput: number;
  elakeLiput: number;
  member: boolean;
  eNimi: string;
  sNimi: string;
  email: string;
  hinta: number;
  private Tilaus: any[] = [];
  constructor() {
    this.perusLiput = 0;
    this.opiskelijaliput = 0;
    this.elakeLiput = 0;
    this.member = false;
    this.eNimi = "";
    this.sNimi = "";
    this.email = "";
    this.hinta = 0;
  }

  setTilaus(tilausTiedot: any[]) {
    this.Tilaus = tilausTiedot;
  }
  getTilaus() {
    return this.Tilaus;
  }
}
