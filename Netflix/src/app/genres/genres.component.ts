import { Component, OnInit } from '@angular/core';
import { GenreService } from '../genre.service';
import { Genre } from '../genre';
import { Movie } from '../movie';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  genres: Genre[];

  constructor(private genreService: GenreService ) { }

  ngOnInit(): void {
    this.getGenres();
  }

  getGenres(): void {
    this.genreService.getGenres().subscribe(genres => this.genres = genres);
  }
}
