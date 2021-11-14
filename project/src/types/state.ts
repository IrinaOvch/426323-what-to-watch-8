import { AuthorizationStatus } from '../const';
import { Film } from './film';

export type State = {
  currentGenre: string;
  isFilmsLoading: boolean;
  isFilmsError: boolean;
  films: Film[];
  isPromoLoading: boolean;
  isPromoError: boolean;
  promo: Film;
  filmsShownAmount: number;
  authorizationStatus: AuthorizationStatus;
  isDataLoaded: boolean,
};
