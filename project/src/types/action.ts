import { AxiosInstance } from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AuthorizationStatus } from '../const';
import { FilmFromServerType } from './film';
import { State } from './state';

export enum ActionType {
  ChangeGenre = 'films/changeGenre',
  IncrementFilmsShownAmount = 'films/incrementFilmsShownAmount',
  ResetFilmsShownAmount = 'films/resetFilmsShownAmount',
  LoadFilms = 'data/loadFilms',
  LoadPromo = 'data/loadPromo',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
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

export type LoadFilms = {
  type: ActionType.LoadFilms;
  payload: FilmFromServerType[];
}

export type LoadPromo = {
  type: ActionType.LoadPromo;
  payload: FilmFromServerType;
}

export type RequireAuthorization = {
  type: ActionType.RequireAuthorization;
  payload: AuthorizationStatus;
}

export type RequireLogout = {
  type: ActionType.RequireLogout;
}

export type Actions =
  ChangeGenre |
  IncrementFilmsShownAmount |
  ResetFilmsShownAmount |
  LoadFilms |
  LoadPromo |
  RequireAuthorization |
  RequireLogout;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
