import { AuthorizationStatus } from '../const';
import { RootState } from '../store/root-reducer';
import { Film } from './film';
import { Review } from './review';
import { UserInfo } from './user-info';

export type FilmsData = {
  isFilmsLoading: boolean;
  isFilmsError: boolean;
  films: Film[];
  isPromoLoading: boolean;
  isPromoError: boolean;
  promo: Film;
  isFilmLoading: boolean;
  isFilmError: boolean;
  film: Film,
  isSimilarFilmsLoading: boolean;
  isSimilarFilmsError: boolean;
  similarFilms: Film[];
}

export type UserProcess = {
  isLoginLoading: boolean;
  isLoginError: boolean;
  authData: UserInfo;
  isLogoutLoading: boolean;
  isLogoutError: boolean;
  authorizationStatus: AuthorizationStatus;
};

export type ReviewsData = {
  isFilmReviewsLoading: boolean;
  isFilmReviewsError: boolean;
  reviews: Review[],
  isReviewPosting: boolean;
}

export type FilmsProcess = {
  currentGenre: string;
  filmsShownAmount: number;
}

export type State = RootState;
