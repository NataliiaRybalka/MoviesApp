import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Value} from "../models/value";
import {Movie} from "../models/movie";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private url = 'https://api.themoviedb.org/3/discover/movie';

  constructor(private httpClient: HttpClient) { }

  getMovies(): Observable<Value> {
    return this.httpClient.get<Value>(this.url)
  }

  getMoviesByTitle(title: string, movies: Movie[]): Movie[] {
    return movies.filter(movie => movie.original_title.toLowerCase().includes(title.toLowerCase()))
  }

  getTopMovies(movies: Movie[]): Movie[] {
    return movies.filter(movie => movie.vote_average > 8)
  }

}
