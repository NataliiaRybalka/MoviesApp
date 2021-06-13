import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";
import {ActivatedRoute, Router} from "@angular/router";
import {GenresService} from "../../services/genres.service";
import {Genre} from "../../models/genre";

@Component({
  selector: 'app-movies-list-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input()
  movie: Movie;

  genres: Genre[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private genresService: GenresService) {
  }

  ngOnInit(): void {
    this.genresService.getGenres().subscribe(value => {
      this.genres = value.genres;
      let genre_names: string[] = [];
      for (const genre of this.genres) {
        for (const genreId of this.movie.genre_ids) {
          if (genreId === genre.id) {
            genre_names.push(genre.name);
          }
        }
      }
      this.movie.genre_name = genre_names.join(', ');
    })
  }

  goToDetails(): void {
    this.router.navigate([this.movie.id], {relativeTo: this.activatedRoute, state: this.movie});
  }
}
