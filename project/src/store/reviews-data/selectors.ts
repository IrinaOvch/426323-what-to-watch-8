import { NameSpace } from '../root-reducer';
import { State } from '../../types/state';
import { Review } from '../../types/review';

export const getFilmReviewsLoadingStatus = (state: State): boolean => state[NameSpace.Reviews].isFilmReviewsLoading;
export const getFilmReviewsErrorStatus = (state: State): boolean => state[NameSpace.Reviews].isFilmReviewsError;
export const getReviews = (state: State): Review[] => state[NameSpace.Reviews].reviews;
export const getFilmReviewPostingStatus = (state: State): boolean => state[NameSpace.Reviews].isReviewPosting;
