export enum ActionType {
  ChangeGenre = 'films/changeGenre',
  IncrementFilmsShownAmount = 'films/incrementFilmsShownAmount',
  ResetFilmsShownAmount = 'films/resetFilmsShownAmount',
}

export type ChangeGenre = {
  type: ActionType.ChangeGenre;
  payload: string;
};

export type IncrementFilmsShownAmount = {
  type: ActionType.IncrementFilmsShownAmount;
  payload: number;
};

export type ResetFilmsShownAmount = {
  type: ActionType.ResetFilmsShownAmount;
}

export type Actions = ChangeGenre | IncrementFilmsShownAmount | ResetFilmsShownAmount;
