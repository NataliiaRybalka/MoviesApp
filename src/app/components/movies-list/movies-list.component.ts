import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {Movie} from "../../models/movie";
import {createLogErrorHandler} from "@angular/compiler-cli/ngcc/src/execution/tasks/completion";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  value: any;
  moviesList: Movie[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(value => {
      this.value = value;
      this.moviesList = this.value.results;
    })
  }

}