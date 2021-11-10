import { AuthorizationStatus, FILMS_SHOWN_PER_CLICK } from '../const';
import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';
import { adaptFilmsToClient, adaptFilmToClient } from '../utils/adapt-to-client';

const EMPTY_FILM = {
  id: 0,
  title: '',
  posterImage: '',
  previewImage: '',
  backgroundImage: '',
  backgroundColor: '',
  description: '',
  rating: 0,
  scoresCount: 0,
  director: '',
  starring: [],
  runTime: 0,
  genre: '',
  releaseYear: 0,
  videoLink: '',
  previewVideoLink: '',
  isFavourite: false,
};

const initialState = {
  currentGenre: 'All genres',
  films: [],
  promo: EMPTY_FILM,
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
    case ActionType.LoadFilms:
      return { ...state, films: adaptFilmsToClient(action.payload) };
    case ActionType.LoadPromo:
      return { ...state, promo: adaptFilmToClient(action.payload) };
    case ActionType.RequireLogout:
      return { ...state, authorizationStatus: AuthorizationStatus.NoAuth };
    case ActionType.RequireAuthorization:
      return { ...state, authorizationStatus: action.payload, isDataLoaded: true };
    default:
      return state;
  }
};

export { reducer };
