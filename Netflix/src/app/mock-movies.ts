import { Movie } from './movie';

export const ACTION_MOVIES: Movie[] = [
    { id: 11, genreId: 1, name: 'Avengers', description: 'Marvel Movie' },
    { id: 12, genreId: 1, name: 'Justice League', description: 'DC Movie' },
    { id: 13, genreId: 1, name: 'Star Wars', description: 'Disney Movie' }
];

export const DRAMA_MOVIES: Movie[] = [
    { id: 21, genreId: 2, name: 'Ford v Ferrari', description: '20th Fox Century Movie' },
    { id: 22, genreId: 2, name: 'Joker', description: 'DC Movie' },
    { id: 23, genreId: 2, name: '1917', description: 'Universal Pictures Movie' }
];

export const ALL_MOVIES = [ ...ACTION_MOVIES, ...DRAMA_MOVIES ];