import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import {MovieCardComponent} from './components/movie-card/movie-card.component';
import {RouterModule, Routes} from "@angular/router";
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import {ReactiveFormsModule} from "@angular/forms";
import { UserComponent } from './components/user/user.component';
import { PageComponent } from './components/page/page.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { PosterPreviewComponent } from './components/poster-preview/poster-preview.component';
import { GenreBadgeComponent } from './components/genre-badge/genre-badge.component';
import {CustomInterceptorService} from "./services/custom-interceptor.service";

const routes: Routes = [
  {path: '', component: MoviesListComponent},
  {path: ':id', component: MovieDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    UserComponent,
    PageComponent,
    StarRatingComponent,
    PosterPreviewComponent,
    GenreBadgeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
