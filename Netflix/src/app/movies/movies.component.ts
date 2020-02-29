import { Component, OnInit } from '@angular/core';
import { GenreService } from '../genre.service';
import { Genre } from '../genre';
import { Movie } from '../movie';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[];
  genre: Genre;

  constructor(private genreService: GenreService, 
    private location: Location, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getGenreMovies();
  }

  getGenreMovies(): void {
    const genreId = +this.route.snapshot.paramMap.get('genreId');
    this.genreService.getMoviesByGenreId(genreId)
      .subscribe(movies => this.movies = movies);
    this.genreService.getGenreById(genreId).subscribe(genre => this.genre = genre);
  }
}
