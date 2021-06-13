import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {Movie} from "../../models/movie";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  moviesList: Movie[];
  display: Movie[];

  @Output('activate')
  activateEvents = new EventEmitter<any>()

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(value => {
      this.moviesList = value.results;
      this.display = this.moviesList;
    })
  }

  lifting(): void {
    this.activateEvents.emit(this.moviesList)
  }

}
