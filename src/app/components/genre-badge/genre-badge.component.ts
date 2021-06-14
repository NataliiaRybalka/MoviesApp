import {Component, Input, OnInit} from '@angular/core';
import {GenresService} from "../../services/genres.service";
import {Genre} from "../../models/genre";

@Component({
  selector: 'app-genre-badge',
  templateUrl: './genre-badge.component.html',
  styleUrls: ['./genre-badge.component.css']
})
export class GenreBadgeComponent implements OnInit {
  genres: Genre[];
  @Input()
  genreIds: number[];
  genreNames: string[] = [];

  constructor(private genresService: GenresService) { }

  ngOnInit(): void {
    this.genresService.getGenres().subscribe(value => {
      this.genres = value.genres;
      for (const genre of this.genres) {
        for (const genreId of this.genreIds) {
          if (genreId === genre.id) {
            this.genreNames.push(genre.name, ' ');
          }
        }
      }
    })
  }

}
