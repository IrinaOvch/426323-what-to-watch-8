import { Film } from '../types/film';

const GENRES_MAX_AMOUNT = 10;
const ALL_GENRES = 'All genres';

const getGenres = (films: Film[]): string[] => {
  const genres = [...new Set([ALL_GENRES, ...films.map((film) => film.genre)])];

  return genres.slice(0, GENRES_MAX_AMOUNT - 1);
};

export { getGenres };
