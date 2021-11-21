import { AuthorizationStatus } from '../const';
import { Film } from './film';
import { Review } from './review';
import { UserInfo } from './user-info';

export type State = {
  currentGenre: string;
  isFilmsLoading: boolean;
  isFilmsError: boolean;
  films: Film[];
  isPromoLoading: boolean;
  isPromoError: boolean;
  promo: Film;
  isLoginLoading: boolean;
  isLoginError: boolean;
  authData: UserInfo;
  filmsShownAmount: number;
  authorizationStatus: AuthorizationStatus;
  isLogoutLoading: boolean;
  isLogoutError: boolean;
  isFilmLoading: boolean;
  isFilmError: boolean;
  film: Film,
  isSimilarFilmsLoading: boolean;
  isSimilarFilmsError: boolean;
  similarFilms: Film[];
  isFilmReviewsLoading: boolean;
  isFilmReviewsError: boolean;
  reviews: Review[],
  isReviewPosting: boolean;
};
