import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {MoviesListComponent, MovieCardComponent, MovieDetailsComponent, UserComponent, PageComponent, StarRatingComponent, PosterPreviewComponent, GenreBadgeComponent} from './components/index';
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
