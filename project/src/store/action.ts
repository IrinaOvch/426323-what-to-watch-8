import { AuthorizationStatus } from '../const';
import {
  ActionType,
  ChangeGenre,
  IncrementFilmsShownAmount,
  LoadFilmsRequest,
  LoadFilmsSuccess,
  LoadFilmsFailed,
  ResetFilmsShownAmount,
  RequireLogout,
  RequireAuthorization,
  LoadPromoRequest,
  LoadPromoSuccess,
  LoadPromoFailed,
  LoginRequest,
  LoginSuccess,
  LoginFailed,
  LogoutRequest,
  LogoutFailed,
  LogoutSuccess,
  LoadFilmRequest,
  LoadFilmSuccess,
  LoadFilmFailed,
  LoadSimilarFilmsRequest,
  LoadSimilarFilmsSuccess,
  LoadSimilarFilmsFailed,
  LoadFilmReviewsRequest,
  LoadFilmReviewsSuccess,
  LoadFilmReviewsFailed,
  PostReviewRequest
} from '../types/action';
import { FilmFromServerType } from '../types/film';
import { Review } from '../types/review';
import { UserInfo } from '../types/user-info';

const loadFilmsRequest = (status: boolean): LoadFilmsRequest => ({
  type: ActionType.LoadFilmsRequest,
  payload: status,
});

const loadFilmsSuccess = (films: FilmFromServerType[]): LoadFilmsSuccess => ({
  type: ActionType.LoadFilmsSuccess,
  payload: films,
});

const loadFilmsFailed = (): LoadFilmsFailed => ({
  type: ActionType.LoadFilmsFailed,
});

const loadPromoRequest = (status: boolean): LoadPromoRequest => ({
  type: ActionType.LoadPromoRequest,
  payload: status,
});

const loadPromoSuccess = (promoFilm: FilmFromServerType): LoadPromoSuccess => ({
  type: ActionType.LoadPromoSuccess,
  payload: promoFilm,
});

const loadPromoFailed = (): LoadPromoFailed => ({
  type: ActionType.LoadPromoFailed,
});

const changeGenre = (genre: string): ChangeGenre => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});

const incrementFilmsShownAmount = (amount: number): IncrementFilmsShownAmount => ({
  type: ActionType.IncrementFilmsShownAmount,
  payload: amount,
});

const resetFilmsShownAmount = (): ResetFilmsShownAmount => ({
  type: ActionType.ResetFilmsShownAmount,
});

const requireAuthorization = (authStatus: AuthorizationStatus): RequireAuthorization => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
});

const requireLogout = (): RequireLogout => ({
  type: ActionType.RequireLogout,
});

const loginRequest = (isLoginLoading: boolean): LoginRequest => ({
  type: ActionType.LoginRequest,
  payload: isLoginLoading,
});

const loginSuccess = (authData: UserInfo): LoginSuccess => ({
  type: ActionType.LoginSuccess,
  payload: authData,
});

const loginFailed = (isLoginError: boolean): LoginFailed => ({
  type: ActionType.LoginFailed,
  payload: isLoginError,
});


const logoutRequest = (isLogoutLoading: boolean): LogoutRequest => ({
  type: ActionType.LogoutRequest,
  payload: isLogoutLoading,
});

const logoutSuccess = (): LogoutSuccess => ({
  type: ActionType.LogoutSuccess,
});

const logoutFailed = (isLogoutError: boolean): LogoutFailed => ({
  type: ActionType.LogoutFailed,
  payload: isLogoutError,
});

export const redirectToRoute = (url: string) => ({
  type: ActionType.RedirectToRoute,
  payload: url,
} as const);

const loadFilmRequest = (status: boolean): LoadFilmRequest => ({
  type: ActionType.LoadFilmRequest,
  payload: status,
});

const loadFilmSuccess = (film: FilmFromServerType): LoadFilmSuccess => ({
  type: ActionType.LoadFilmSuccess,
  payload: film,
});

const loadFilmFailed = (): LoadFilmFailed => ({
  type: ActionType.LoadFilmFailed,
});

const loadSimilarFilmsRequest = (status: boolean): LoadSimilarFilmsRequest => ({
  type: ActionType.LoadSimilarFilmsRequest,
  payload: status,
});

const loadSimilarFilmsSuccess = (similarFilms: FilmFromServerType[]): LoadSimilarFilmsSuccess => ({
  type: ActionType.LoadSimilarFilmsSuccess,
  payload: similarFilms,
});

const loadSimilarFilmsFailed = (): LoadSimilarFilmsFailed => ({
  type: ActionType.LoadSimilarFilmsFailed,
});

const loadFilmReviewsRequest = (status: boolean): LoadFilmReviewsRequest => ({
  type: ActionType.LoadFilmReviewsRequest,
  payload: status,
});

const loadFilmReviewsSuccess = (reviews: Review[]): LoadFilmReviewsSuccess => ({
  type: ActionType.LoadFilmReviewsSuccess,
  payload: reviews,
});

const loadFilmReviewsFailed = (): LoadFilmReviewsFailed => ({
  type: ActionType.LoadFilmReviewsFailed,
});

const postReviewRequest = (status: boolean): PostReviewRequest => ({
  type: ActionType.PostReviewRequest,
  payload: status,
});

export {
  changeGenre,
  incrementFilmsShownAmount,
  resetFilmsShownAmount,
  loadFilmsRequest,
  loadFilmsSuccess,
  loadFilmsFailed,
  loadPromoRequest,
  loadPromoSuccess,
  loadPromoFailed,
  requireAuthorization,
  requireLogout,
  loginRequest,
  loginSuccess,
  loginFailed,
  logoutRequest,
  logoutSuccess,
  logoutFailed,
  loadFilmRequest,
  loadFilmSuccess,
  loadFilmFailed,
  loadSimilarFilmsRequest,
  loadSimilarFilmsSuccess,
  loadSimilarFilmsFailed,
  loadFilmReviewsRequest,
  loadFilmReviewsSuccess,
  loadFilmReviewsFailed,
  postReviewRequest
};
