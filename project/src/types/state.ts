import { AuthorizationStatus } from '../const';
import { Film } from './film';

export type State = {
  currentGenre: string;
  films: Film[];
  promo: Film;
  filmsShownAmount: number;
  authorizationStatus: AuthorizationStatus;
  isDataLoaded: boolean,
};
