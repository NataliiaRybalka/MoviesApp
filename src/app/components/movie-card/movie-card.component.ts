import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";
import {ActivatedRoute, Router} from "@angular/router";
import {relative} from "@angular/compiler-cli/src/ngtsc/file_system";

@Component({
  selector: 'app-movies-list-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input()
  movie: Movie;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToDetails(): void {
    this.router.navigate([this.movie.title], {relativeTo: this.activatedRoute, state: this.movie});
  }

}
