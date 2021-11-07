import { FILMS_SHOWN_PER_CLICK } from '../const';
import { FILMS } from '../mocks/films';
import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';

const initialState = {
  currentGenre: 'All genres',
  films: FILMS,
  filmsShownAmount: FILMS_SHOWN_PER_CLICK,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return { ...state, currentGenre: action.payload };
    case ActionType.IncrementFilmsShownAmount:
      return { ...state, filmsShownAmount: state.filmsShownAmount + action.payload };
    case ActionType.ResetFilmsShownAmount:
      return { ...state, filmsShownAmount: initialState.filmsShownAmount };
    default:
      return state;
  }
};

export { reducer };
