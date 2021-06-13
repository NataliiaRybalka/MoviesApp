import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Movie} from "../../models/movie";
import {MoviesListComponent} from "../movies-list/movies-list.component";
import {MoviesService} from "../../services/movies.service";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit{
  @ViewChild(MoviesListComponent)
  moviesListComponent: MoviesListComponent;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
  }

  changeThemeForm = new FormGroup({
    theme: new FormControl(0)
  });

  search(input: HTMLInputElement): Movie[] {
    return this.moviesListComponent.display = this.moviesService.getMoviesByTitle(input.value, this.moviesListComponent.moviesList);
  }

  topMovies(): Movie[] {
    return this.moviesListComponent.display = this.moviesService.getTopMovies(this.moviesListComponent.moviesList);
  }

  allMovies(): Movie[] {
    return this.moviesListComponent.display = this.moviesListComponent.moviesList;
  }

}
