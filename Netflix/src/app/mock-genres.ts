import { Genre } from './genre';
import { ACTION_MOVIES, DRAMA_MOVIES } from './mock-movies';

export const MOVIE_GENRES: Genre[] = [
    { id: 1, name: 'Action', movies: ACTION_MOVIES },
    { id: 2, name: 'Drama', movies: DRAMA_MOVIES }
]