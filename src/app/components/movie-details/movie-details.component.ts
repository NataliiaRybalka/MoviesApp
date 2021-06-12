import { Component, OnInit } from '@angular/core';
import {Movie} from "../../models/movie";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.movie = this.router.getCurrentNavigation()?.extras.state as Movie;
    })
  }

  ngOnInit(): void {
  }
}