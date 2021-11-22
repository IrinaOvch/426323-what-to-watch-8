import { combineReducers } from 'redux';
import { filmsProcess } from './app/app';
import { reviewsData } from './reviews/reviews';
import { filmsData } from './films/films';
import { userProcess } from './user/user';

export enum NameSpace {
  Films = 'FILMS',
  Reviews = 'REVIEWS',
  User = 'USER',
  App = 'APP',
}


export const rootReducer = combineReducers({
  [NameSpace.Films]: filmsData,
  [NameSpace.Reviews]: reviewsData,
  [NameSpace.User]: userProcess,
  [NameSpace.App]: filmsProcess,
});

export type RootState = ReturnType<typeof rootReducer>;
