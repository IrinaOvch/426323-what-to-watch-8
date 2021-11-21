import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { ActionType } from '../types/action';
import { FilmFromServerType } from '../types/film';
import { Review } from '../types/review';
import { UserInfo } from '../types/user-info';

export const loadFilmsRequest = createAction(
  ActionType.LoadFilmsRequest,
  (status: boolean) => ({
    payload: status,
  }),
);

export const loadFilmsSuccess = createAction(
  ActionType.LoadFilmsSuccess,
  (films: FilmFromServerType[]) => ({
    payload: films,
  }),
);

export const loadFilmsFailed = createAction(
  ActionType.LoadFilmsFailed,
);

export const loadPromoRequest = createAction(
  ActionType.LoadPromoRequest,
  (status: boolean) => ({
    payload: status,
  }),
);

export const loadPromoSuccess = createAction(
  ActionType.LoadPromoSuccess,
  (promoFilm: FilmFromServerType) => ({
    payload: promoFilm,
  }),
);

export const loadPromoFailed = createAction(
  ActionType.LoadPromoFailed,
);

export const changeGenre = createAction(
  ActionType.ChangeGenre,
  (genre: string) => ({
    payload: genre,
  }),
);

export const incrementFilmsShownAmount = createAction(
  ActionType.IncrementFilmsShownAmount,
  (amount: number) => ({
    payload: amount,
  }),
);

export const resetFilmsShownAmount = createAction(
  ActionType.ResetFilmsShownAmount,
);

export const requireAuthorization = createAction(
  ActionType.RequireAuthorization,
  (authStatus: AuthorizationStatus) => ({
    payload: authStatus,
  }),
);

export const requireLogout = createAction(
  ActionType.RequireLogout,
);

export const loginRequest = createAction(
  ActionType.LoginRequest,
  (isLoginLoading: boolean) => ({
    payload: isLoginLoading,
  }),
);

export const loginSuccess = createAction(
  ActionType.LoginSuccess,
  (authData: UserInfo) => ({
    payload: authData,
  }),
);

export const loginFailed = createAction(
  ActionType.LoginFailed,
  (isLoginError: boolean) => ({
    payload: isLoginError,
  }),
);

export const logoutRequest = createAction(
  ActionType.LogoutRequest,
  (isLogoutLoading: boolean) => ({
    payload: isLogoutLoading,
  }),
);

export const logoutSuccess = createAction(
  ActionType.LogoutSuccess,
);

export const logoutFailed = createAction(
  ActionType.LogoutFailed,
  (isLogoutError: boolean) => ({
    payload: isLogoutError,
  }),
);


export const redirectToRoute = createAction(
  ActionType.RedirectToRoute,
  (url: string) => ({
    payload: url,
  }),
);

export const loadFilmRequest = createAction(
  ActionType.LoadFilmRequest,
  (status: boolean) => ({
    payload: status,
  }),
);

export const loadFilmSuccess = createAction(
  ActionType.LoadFilmSuccess,
  (film: FilmFromServerType) => ({
    payload: film,
  }),
);

export const loadFilmFailed = createAction(
  ActionType.LoadFilmFailed,
);

export const loadSimilarFilmsRequest = createAction(
  ActionType.LoadSimilarFilmsRequest,
  (status: boolean) => ({
    payload: status,
  }),
);

export const loadSimilarFilmsSuccess = createAction(
  ActionType.LoadSimilarFilmsSuccess,
  (similarFilms: FilmFromServerType[]) => ({
    payload: similarFilms,
  }),
);

export const loadSimilarFilmsFailed = createAction(
  ActionType.LoadSimilarFilmsFailed,
);

export const loadFilmReviewsRequest = createAction(
  ActionType.LoadFilmReviewsRequest,
  (status: boolean) => ({
    payload: status,
  }),
);

export const loadFilmReviewsSuccess = createAction(
  ActionType.LoadFilmReviewsSuccess,
  (reviews: Review[]) => ({
    payload: reviews,
  }),
);

export const loadFilmReviewsFailed = createAction(
  ActionType.LoadFilmReviewsFailed,
);

export const postReviewRequest = createAction(
  ActionType.PostReviewRequest,
  (status: boolean) => ({
    payload: status,
  }),
);
