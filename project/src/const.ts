export const FILMS_SHOWN_PER_CLICK = 8;
export const GENRES_MAX_AMOUNT = 10;
export const ALL_GENRES = 'All genres';

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '/404'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Films = '/films',
  Promo = '/promo',
  Login = '/login',
  Logout = '/logout',
  MyList = '/favorite'
}

export const errorMessages = {
  checkAuthFailMessage: 'We can’t recognize this email \n and password combination. Please try again.',
  genericError: 'Something went wrong, please try again.',
  logoutFailed: 'Logout failed, please try again.',
};
