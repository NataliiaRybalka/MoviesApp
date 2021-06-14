import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-poster-preview',
  templateUrl: './poster-preview.component.html',
  styleUrls: ['./poster-preview.component.css']
})
export class PosterPreviewComponent implements OnInit {
  @Input()
  poster: string;
  @Input()
  posterClass: string

  constructor() { }

  ngOnInit(): void {
  }

}
