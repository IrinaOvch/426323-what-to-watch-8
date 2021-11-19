import { AppRoute, AuthorizationStatus } from '../const';
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
  LogoutSuccess
} from '../types/action';
import { FilmFromServerType } from '../types/film';
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

export const redirectToRoute = (url: AppRoute) => ({
  type: ActionType.RedirectToRoute,
  payload: url,
} as const);

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
  logoutFailed
};
