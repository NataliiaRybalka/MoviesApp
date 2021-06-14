import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Value} from "../models/value";

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  private url = 'https://api.themoviedb.org/3/genre/movie/list';

  constructor(private httpClient: HttpClient) { }

  getGenres(): Observable<Value>{
    return this.httpClient.get<Value>(this.url)
  }
}
