import { createReducer } from '@reduxjs/toolkit';
import { ReviewsData } from '../../types/state';
import { loadFilmReviewsFailed, loadFilmReviewsRequest, loadFilmReviewsSuccess, postReviewRequest } from '../action';

const initialState: ReviewsData = {
  isFilmReviewsLoading: false,
  isFilmReviewsError: false,
  reviews: [],
  isReviewPosting: false,
};

const reviewsData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFilmReviewsRequest, (state, action) => {
      state.isFilmReviewsLoading = action.payload;
    })
    .addCase(loadFilmReviewsSuccess, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(loadFilmReviewsFailed, (state) => {
      state.isFilmReviewsError = true;
    })
    .addCase(postReviewRequest, (state, action) => {
      state.isReviewPosting = action.payload;
    });
});

export { reviewsData };
