import {Component, Input} from '@angular/core';
import {Movie} from "../../models/movie";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movies-list-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input()
  movie: Movie;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  goToDetails(): void {
    this.router.navigate([this.movie.id], {relativeTo: this.activatedRoute, state: this.movie});
  }
}
