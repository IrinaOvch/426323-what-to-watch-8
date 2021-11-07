export enum ActionType {
  ChangeGenre = 'films/changeGenre',
  FilterFilms = 'films/filter',
}

export type ChangeGenre = {
  type: ActionType.ChangeGenre;
  payload: string;
};

export type Actions = ChangeGenre;
