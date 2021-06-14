import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-poster-preview',
  templateUrl: './poster-preview.component.html',
  styleUrls: ['./poster-preview.component.css']
})
export class PosterPreviewComponent {
  @Input()
  poster: string;
  @Input()
  posterClass: string
}
