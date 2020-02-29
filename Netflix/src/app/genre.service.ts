import { Injectable } from '@angular/core';
import { Genre } from './genre';
import { Movie } from './movie';
import { Observable, of } from 'rxjs';
import { ALL_MOVIES } from './mock-movies';
import { MOVIE_GENRES } from './mock-genres';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  genres = MOVIE_GENRES;
  movies = ALL_MOVIES;

  constructor() { }

  getGenres(): Observable<Genre[]> {
    return of(this.genres);
  }

  getGenreById(genreId): Observable<Genre> {
    const neededGenre = this.genres.find(genre => genre.id === genreId);
    return of(neededGenre);
  }

  getMoviesByGenreId(genreId): Observable<Movie[]> {
    const neededGenre = this.genres.find(genre => genre.id === genreId);
    return of(neededGenre.movies);
  }

  getMoviesByGenreIdFromAllMovies(genreId): Observable<Movie[]> {
    const neededMovies = this.movies.filter(movie => movie.genreId === genreId);
    return of(neededMovies);
  }

  getMovieByMovieId(movieId): Observable<Movie> {
    const neededMovie = this.movies.find(movie => movie.id === movieId);
    return of(neededMovie);
  }
}
