import { AuthorizationStatus } from '../const';
import {
  ActionType,
  ChangeGenre,
  IncrementFilmsShownAmount,
  LoadFilms,
  ResetFilmsShownAmount,
  RequireLogout,
  RequireAuthorization,
  LoadPromo
} from '../types/action';
import { FilmFromServerType } from '../types/film';

const loadFilms = (films: FilmFromServerType[]): LoadFilms => ({
  type: ActionType.LoadFilms,
  payload: films,
});

const loadPromo = (promoFilm: FilmFromServerType): LoadPromo => ({
  type: ActionType.LoadPromo,
  payload: promoFilm,
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

export const requireAuthorization = (authStatus: AuthorizationStatus): RequireAuthorization => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const requireLogout = (): RequireLogout => ({
  type: ActionType.RequireLogout,
} as const);

export { changeGenre, incrementFilmsShownAmount, resetFilmsShownAmount, loadFilms, loadPromo };
