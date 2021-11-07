import { ActionType, ChangeGenre } from '../types/action';


const changeGenre = (genre: string): ChangeGenre => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});

export { changeGenre };
