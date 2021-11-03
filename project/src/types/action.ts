import { Film } from './film';

export enum ActionType {
  ChangeGenre = 'films/changeGenre',
  FilterFilms = 'films/filter',
}

export type ChangeGenre = {
  type: ActionType.ChangeGenre;
  payload: string;
};

export type FilterFilms = {
  type: ActionType.FilterFilms;
  payload: Film[];
};

export type Actions = ChangeGenre | FilterFilms;
