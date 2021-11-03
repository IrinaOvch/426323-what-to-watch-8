import { Film } from '../types/film';

const GENRES_MAX_AMOUNT = 10;
const ALL_GENRES = 'All genres';

const getGenres = (films: Film[]): string[] => {
  const genres = [...new Set([ALL_GENRES, ...films.map((film) => film.genre)])];
  if (genres.length > GENRES_MAX_AMOUNT) {
    return genres.slice(GENRES_MAX_AMOUNT - 1);
  }

  return genres;
};

export { getGenres };
