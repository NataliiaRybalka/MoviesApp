import {Component, OnInit} from '@angular/core';
import {GenresService} from "../../services/genres.service";
import {Genre} from "../../models/genre";

@Component({
  selector: 'app-genre-badge',
  templateUrl: './genre-badge.component.html',
  styleUrls: ['./genre-badge.component.css']
})
export class GenreBadgeComponent implements OnInit {
  private value: any;
  genres: Genre[];

  constructor(private genresService: GenresService) { }

  ngOnInit(): void {
    this.genresService.getGenres().subscribe(value => {
      this.value = value;
      this.genres = this.value.genres;
    })
  }
}
