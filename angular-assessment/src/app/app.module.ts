import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesChildComponent } from './movies-child/movies-child.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AddMovieComponent,
    MoviesComponent,
    MoviesChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // AppRoutingModule
    RouterModule.forRoot([
      {path : 'movies', component : MoviesComponent},
      {path : 'add-movie' , component : AddMovieComponent},
      {path : 'login' , component : LoginComponent}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
