import { NameSpace } from '../root-reducer';
import { State } from '../../types/state';

export const getcurrentGenre = (state: State): string => state[NameSpace.App].currentGenre;
export const getfilmsShownAmount = (state: State): number => state[NameSpace.App].filmsShownAmount;
