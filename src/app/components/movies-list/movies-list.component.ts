import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {Movie} from "../../models/movie";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  moviesList: Movie[];
  display: Movie[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(value => {
      this.moviesList = value.results;
      this.display = this.moviesList;
    })
  }

  search(input: HTMLInputElement) {
    this.display = this.moviesService.getMoviesByTitle(input.value, this.moviesList);
  }

}
