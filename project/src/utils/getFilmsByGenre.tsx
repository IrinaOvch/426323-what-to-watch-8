import { Film } from '../types/film';

const ALL_GENRES = 'All genres';

const getFilmsByGenre = (currentGenre: string, films: Film[]): Film[] => {
  if (currentGenre === ALL_GENRES) {
    return films;
  }

  return films.filter((film) => film.genre === currentGenre);
};

export { getFilmsByGenre };
