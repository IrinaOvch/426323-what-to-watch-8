import { ActionType, ChangeGenre, IncrementFilmsShownAmount, ResetFilmsShownAmount } from '../types/action';


const changeGenre = (genre: string): ChangeGenre => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});

const incrementFilmsShownAmount = (amount: number): IncrementFilmsShownAmount => ({
  type: ActionType.IncrementFilmsShownAmount,
  payload: amount,
});

const resetFilmsShownAmount = (): ResetFilmsShownAmount => ({
  type: ActionType.ResetFilmsShownAmount,
});

export { changeGenre, incrementFilmsShownAmount, resetFilmsShownAmount };
