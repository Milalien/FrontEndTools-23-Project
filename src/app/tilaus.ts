export class Tilaus {


    perusLiput: number;
    opiskelijaliput: number;
    elakeLiput: number;
    member: boolean;
    eNimi: string;
    sNimi: string;
    email: string;
    hinta: number;

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

}
