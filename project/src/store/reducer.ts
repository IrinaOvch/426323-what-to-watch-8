import { FILMS } from '../mocks/films';
import { Actions, ActionType } from '../types/action';
import { State } from '../types/State';

const initialState = {
  currentGenre: 'All genres',
  films: FILMS,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return { ...state, currentGenre: action.payload };
    case ActionType.FilterFilms:
      return { ...state, films: action.payload };
    default:
      return state;
  }
};

export { reducer };


// FILMS.filter((film) => film.genre === action.payload)
