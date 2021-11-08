export const FILMS_SHOWN_PER_CLICK = 2;
// потом заменю на 8, чтобы моки не плодить сейчас)

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
