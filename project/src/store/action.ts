import { ActionType, ChangeGenre, FilterFilms } from '../types/action';
import { Film } from '../types/film';


const changeGenre = (genre: string): ChangeGenre => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});

const filterFilms = (films: Film[]): FilterFilms => ({
  type: ActionType.FilterFilms,
  payload: films,
});

export { changeGenre, filterFilms };
