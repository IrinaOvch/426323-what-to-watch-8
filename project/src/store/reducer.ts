import { AuthorizationStatus, FILMS_SHOWN_PER_CLICK } from '../const';
import { Actions, ActionType } from '../types/action';
import { Film } from '../types/film';
import { State } from '../types/state';
import { adaptFilmsToClient, adaptFilmToClient } from '../utils/adapt-to-client';

const initialState = {
  currentGenre: 'All genres',
  isFilmsLoading: false,
  isFilmsError: false,
  films: [],
  isPromoLoading: false,
  isPromoError: false,
  promo: {} as Film,
  filmsShownAmount: FILMS_SHOWN_PER_CLICK,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return { ...state, currentGenre: action.payload };
    case ActionType.IncrementFilmsShownAmount:
      return { ...state, filmsShownAmount: state.filmsShownAmount + action.payload };
    case ActionType.ResetFilmsShownAmount:
      return { ...state, filmsShownAmount: initialState.filmsShownAmount };
    case ActionType.LoadFilmsRequest:
      return { ...state, isFilmsLoading: action.payload };
    case ActionType.LoadFilmsSuccess:
      return { ...state, films: adaptFilmsToClient(action.payload) };
    case ActionType.LoadFilmsFailed:
      return { ...state, isFilmsError: true };
    case ActionType.LoadPromoRequest:
      return { ...state, isPromoLoading: action.payload };
    case ActionType.LoadPromoSuccess:
      return { ...state, promo: adaptFilmToClient(action.payload) };
    case ActionType.LoadPromoFailed:
      return { ...state, isPromoError: true };
    case ActionType.RequireLogout:
      return { ...state, authorizationStatus: AuthorizationStatus.NoAuth };
    case ActionType.RequireAuthorization:
      return { ...state, authorizationStatus: action.payload, isDataLoaded: true };
    default:
      return state;
  }
};

export { reducer };
