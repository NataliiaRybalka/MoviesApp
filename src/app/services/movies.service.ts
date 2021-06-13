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
    return this.httpClient.get<Value>(this.url, {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODJlN2Q1M2M3MTQ3OTFmZjczZmU4NzA3ODdmMDgxNSIsInN1YiI6IjU3ZWE0NjY0OTI1MTQxMTA4OTAwOGZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lEEivZliSc_G_UGJbP8p1LRlPXWu3U9erTCsUnRWP_U',
      }
    })
  }

  getMoviesByTitle(title: string, movies: Movie[]): Movie[] {
    return movies.filter(movie => movie.original_title.toLowerCase().includes(title.toLowerCase()))
  }

  getTopMovies(movies: Movie[]): Movie[] {
    return movies.filter(movie => movie.vote_average > 8)
  }

}
