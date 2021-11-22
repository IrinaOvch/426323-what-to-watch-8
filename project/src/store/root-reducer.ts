import { combineReducers } from 'redux';
import { filmsProcess } from './films-process/films-process';
import { reviewsData } from './reviews-data/reviews-data';
import { filmsData } from './films-data/films-data';
import { userProcess } from './user-process/user-process';

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
