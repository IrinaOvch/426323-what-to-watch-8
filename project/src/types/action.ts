import { Action } from 'redux';
import { AxiosInstance } from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { State } from './state';

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
  LoadMyListRequest = 'data/loadMyListRequest',
  LoadMyListSuccess = 'data/loadMyListSuccess',
  LoadMyListFailed = 'data/loadMyListFailed',
  AddMyListRequest = 'data/addMyListRequest',
  UpdateFilmFavouriteStatus = 'data/updateFilmFavouriteStatus',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
