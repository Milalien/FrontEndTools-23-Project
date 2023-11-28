import { Component } from '@angular/core';
import { CinemaService } from '../services/cinema.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent {
  cinemaData$: Observable<[any]>;

  constructor(private cinemaService: CinemaService) {
    //this.cinemaData$ = this.cinemaService.getTestData();
    this.cinemaData$ = this.cinemaService.getData();

  }
}
