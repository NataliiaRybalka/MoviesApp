import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import {MovieCardComponent} from './components/movie-card/movie-card.component';
import {RouterModule, Routes} from "@angular/router";
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';


const routes: Routes = [
  {path: '', component: MoviesListComponent},
  {path: ':title', component: MovieDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieCardComponent,
    MovieDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
