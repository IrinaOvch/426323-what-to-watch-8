import { FILMS } from '../mocks/films';
import { Film } from '../types/film';

const ALL_GENRES = 'All genres';

const getFilmsByGenre = (currentGenre: string): Film[] => {
  if (currentGenre === ALL_GENRES) {
    return FILMS;
  }

  return FILMS.filter((film) => film.genre === currentGenre);
};

export { getFilmsByGenre };
