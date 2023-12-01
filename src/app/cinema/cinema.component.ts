import { Component } from '@angular/core';
import { CinemaService } from '../services/cinema.service';
import { Observable } from 'rxjs';
import { MoviePipe } from '../pipes/movie.pipe';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent {
  cinemaData$: Observable<any>;
  searchTerm: any;

  constructor(private cinemaService: CinemaService, private moviePipe: MoviePipe) {
    this.cinemaData$ = this.cinemaService.getData();
  }

}
