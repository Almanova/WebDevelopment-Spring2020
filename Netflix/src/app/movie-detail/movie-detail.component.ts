import { Component, OnInit, Input } from '@angular/core';
import { GenreService } from '../genre.service';
import { Genre } from '../genre';
import { Movie } from '../movie';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input() movie: Movie;

  constructor(private genreService: GenreService, 
    private location: Location, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    const movieId = +this.route.snapshot.paramMap.get('movieId');
    this.genreService.getMovieByMovieId(movieId)
      .subscribe(movie => this.movie = movie);
  }

  goBack(): void {
    this.location.back();
  }
}
