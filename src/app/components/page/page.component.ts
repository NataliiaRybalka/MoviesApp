import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Movie} from "../../models/movie";
import {MoviesListComponent} from "../movies-list/movies-list.component";
import {MoviesService} from "../../services/movies.service";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {
  moviesListComponent: MoviesListComponent;
  headerClass = 'headerShow';

  constructor(private moviesService: MoviesService) { }

  onActive(value: any) {
    this.moviesListComponent = value;
    if (value.activatedRoute.snapshot.routeConfig.path.length === 0) {
      this.headerClass = 'headerShow';
    } else {
      this.headerClass = 'headerHide';
    }
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
