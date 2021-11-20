import { AxiosInstance } from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AuthorizationStatus } from '../const';
import { FilmFromServerType } from './film';
import { Review } from './review';
import { State } from './state';
import { UserInfo } from './user-info';

export enum ActionType {
  ChangeGenre = 'films/changeGenre',
  IncrementFilmsShownAmount = 'films/incrementFilmsShownAmount',
  ResetFilmsShownAmount = 'films/resetFilmsShownAmount',
  LoadFilmsRequest = 'data/loadFilmsRequest',
  LoadFilmsSuccess = 'data/loadFilmsSuccess',
  LoadFilmsFailed = 'data/loadFilmsFailed',
  LoadPromoRequest = 'data/loadPromoRequest',
  LoadPromoSuccess = 'data/loadPromoSuccess',
  LoadPromoFailed = 'data/loadPromoFailed',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  LoginRequest = 'user/loginRequest',
  LoginSuccess = 'user/loginSuccess',
  LoginFailed = 'user/loginFailed',
  LogoutRequest = 'user/logoutRequest',
  LogoutSuccess = 'user/logoutSuccess',
  LogoutFailed = 'user/logoutFailed',
  RedirectToRoute = 'films/redirectToRoute',
  LoadFilmRequest = 'data/loadFilmRequest',
  LoadFilmSuccess = 'data/loadFilmSuccess',
  LoadFilmFailed = 'data/loadFilmFailed',
  LoadSimilarFilmsRequest = 'data/loadSimilarFilmsRequest',
  LoadSimilarFilmsSuccess = 'data/loadSimilarFilmsSuccess',
  LoadSimilarFilmsFailed = 'data/loadSimilarFilmsFailed',
  LoadFilmReviewsRequest = 'data/loadFilmReviewsRequest',
  LoadFilmReviewsSuccess = 'data/loadFilmReviewsSuccess',
  LoadFilmReviewsFailed = 'data/loadFilmReviewsFailed',
  PostReviewRequest = 'data/postReviewRequest',
}

export type ChangeGenre = {
  type: ActionType.ChangeGenre;
  payload: string;
};

export type IncrementFilmsShownAmount = {
  type: ActionType.IncrementFilmsShownAmount;
  payload: number;
};

export type ResetFilmsShownAmount = {
  type: ActionType.ResetFilmsShownAmount;
}

export type LoadFilmsRequest = {
  type: ActionType.LoadFilmsRequest;
  payload: boolean;
}

export type LoadFilmsSuccess = {
  type: ActionType.LoadFilmsSuccess;
  payload: FilmFromServerType[];
}

export type LoadFilmsFailed = {
  type: ActionType.LoadFilmsFailed;
}

export type LoadPromoRequest = {
  type: ActionType.LoadPromoRequest;
  payload: boolean;
}

export type LoadPromoSuccess = {
  type: ActionType.LoadPromoSuccess;
  payload: FilmFromServerType;
}

export type LoadPromoFailed = {
  type: ActionType.LoadPromoFailed;
}

export type RequireAuthorization = {
  type: ActionType.RequireAuthorization;
  payload: AuthorizationStatus;
}

export type RequireLogout = {
  type: ActionType.RequireLogout;
}

export type LoginRequest = {
  type: ActionType.LoginRequest;
  payload: boolean;
}

export type LoginSuccess = {
  type: ActionType.LoginSuccess;
  payload: UserInfo;
}

export type LoginFailed = {
  type: ActionType.LoginFailed;
  payload: boolean;
}

export type LogoutRequest = {
  type: ActionType.LogoutRequest;
  payload: boolean;
}

export type LogoutSuccess = {
  type: ActionType.LogoutSuccess;
}

export type LogoutFailed = {
  type: ActionType.LogoutFailed;
  payload: boolean;
}

export type RedirectToRoute = {
  type: ActionType.RedirectToRoute;
  payload: string;
};

export type LoadFilmRequest = {
  type: ActionType.LoadFilmRequest;
  payload: boolean;
}

export type LoadFilmSuccess = {
  type: ActionType.LoadFilmSuccess;
  payload: FilmFromServerType;
}

export type LoadFilmFailed = {
  type: ActionType.LoadFilmFailed;
}

export type LoadSimilarFilmsRequest = {
  type: ActionType.LoadSimilarFilmsRequest;
  payload: boolean;
}

export type LoadSimilarFilmsSuccess = {
  type: ActionType.LoadSimilarFilmsSuccess;
  payload: FilmFromServerType[];
}

export type LoadSimilarFilmsFailed = {
  type: ActionType.LoadSimilarFilmsFailed;
}

export type LoadFilmReviewsRequest = {
  type: ActionType.LoadFilmReviewsRequest;
  payload: boolean;
}

export type LoadFilmReviewsSuccess = {
  type: ActionType.LoadFilmReviewsSuccess;
  payload: Review[];
}

export type LoadFilmReviewsFailed = {
  type: ActionType.LoadFilmReviewsFailed;
}

export type PostReviewRequest = {
  type: ActionType.PostReviewRequest;
  payload: boolean;
}

export type Actions =
  ChangeGenre |
  IncrementFilmsShownAmount |
  ResetFilmsShownAmount |
  LoadFilmsRequest |
  LoadFilmsSuccess |
  LoadFilmsFailed |
  LoadPromoRequest |
  LoadPromoSuccess |
  LoadPromoFailed |
  RequireAuthorization |
  RequireLogout |
  LoginRequest |
  LoginSuccess |
  LoginFailed |
  LogoutRequest |
  LogoutSuccess |
  LogoutFailed |
  LoadFilmRequest |
  LoadFilmSuccess |
  LoadFilmFailed |
  LoadSimilarFilmsRequest |
  LoadSimilarFilmsSuccess |
  LoadSimilarFilmsFailed |
  LoadFilmReviewsRequest |
  LoadFilmReviewsSuccess |
  LoadFilmReviewsFailed |
  RedirectToRoute |
  PostReviewRequest;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
