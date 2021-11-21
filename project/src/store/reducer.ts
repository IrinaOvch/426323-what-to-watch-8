import { AuthorizationStatus, FILMS_SHOWN_PER_CLICK } from '../const';
import { Actions, ActionType } from '../types/action';
import { Film } from '../types/film';
import { State } from '../types/state';
import { UserInfo } from '../types/user-info';

const initialState = {
  currentGenre: 'All genres',
  isFilmsLoading: false,
  isFilmsError: false,
  films: [],
  isPromoLoading: false,
  isPromoError: false,
  promo: {} as Film,
  isLoginLoading: false,
  isLoginError: false,
  authData: {} as UserInfo,
  isLogoutLoading: false,
  isLogoutError: false,
  filmsShownAmount: FILMS_SHOWN_PER_CLICK,
  authorizationStatus: AuthorizationStatus.Unknown,
  isFilmLoading: false,
  isFilmError: false,
  film: {} as Film,
  isSimilarFilmsLoading: false,
  isSimilarFilmsError: false,
  similarFilms: [],
  isFilmReviewsLoading: false,
  isFilmReviewsError: false,
  reviews: [],
  isReviewPosting: false,
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
      return { ...state, films: action.payload };
    case ActionType.LoadFilmsFailed:
      return { ...state, isFilmsError: true };
    case ActionType.LoadPromoRequest:
      return { ...state, isPromoLoading: action.payload };
    case ActionType.LoadPromoSuccess:
      return { ...state, promo: action.payload };
    case ActionType.LoadPromoFailed:
      return { ...state, isPromoError: true };
    case ActionType.RequireLogout:
      return { ...state, authorizationStatus: AuthorizationStatus.NoAuth };
    case ActionType.RequireAuthorization:
      return { ...state, authorizationStatus: action.payload };
    case ActionType.LoginRequest:
      return { ...state, isLoginLoading: action.payload };
    case ActionType.LoginSuccess:
      return { ...state, authData: action.payload };
    case ActionType.LoginFailed:
      return { ...state, isLoginError: action.payload };
    case ActionType.LogoutRequest:
      return { ...state, isLogoutLoading: action.payload };
    case ActionType.LogoutSuccess:
      return { ...state, authData: {} as UserInfo };
    case ActionType.LogoutFailed:
      return { ...state, isLogoutError: action.payload };
    case ActionType.LoadFilmRequest:
      return { ...state, isFilmLoading: action.payload };
    case ActionType.LoadFilmSuccess:
      return { ...state, film: action.payload };
    case ActionType.LoadFilmFailed:
      return { ...state, isFilmError: true };
    case ActionType.LoadSimilarFilmsRequest:
      return { ...state, isSimilarFilmsLoading: action.payload };
    case ActionType.LoadSimilarFilmsSuccess:
      return { ...state, similarFilms: action.payload };
    case ActionType.LoadSimilarFilmsFailed:
      return { ...state, isSimilarFilmsError: true };
    case ActionType.LoadFilmReviewsRequest:
      return { ...state, isFilmReviewsLoading: action.payload };
    case ActionType.LoadFilmReviewsSuccess:
      return { ...state, reviews: action.payload };
    case ActionType.LoadFilmReviewsFailed:
      return { ...state, isFilmReviewsError: true };
    case ActionType.PostReviewRequest:
      return { ...state, isReviewPosting: action.payload };
    default:
      return state;
  }
};

export { reducer };
