import {Component, EventEmitter, Output} from '@angular/core';
import {Movie} from "../../models/movie";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent{
  movie: Movie;
  img: string;

  stars = [1, 2, 3, 4, 5];
  selected: number;
  hover: number;

  @Output('activate')
  activateEvents = new EventEmitter<any>()

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.movie = this.router.getCurrentNavigation()?.extras.state as Movie;
      this.img = 'https://image.tmdb.org/t/p/original' + this.movie.poster_path;
    })
  }

  lifting(): void {
    this.activatedRoute.snapshot.routeConfig?.path;
  }
}
