import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Genre} from "../models/genre";

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  private url = 'https://api.themoviedb.org/3/genre/movie/list';

  constructor(private httpClient: HttpClient) { }

  getGenres(): Observable<Genre[]>{
    return this.httpClient.get<Genre[]>(this.url, {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODJlN2Q1M2M3MTQ3OTFmZjczZmU4NzA3ODdmMDgxNSIsInN1YiI6IjU3ZWE0NjY0OTI1MTQxMTA4OTAwOGZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lEEivZliSc_G_UGJbP8p1LRlPXWu3U9erTCsUnRWP_U',
      }
    })
  }
}
