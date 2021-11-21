import { createReducer } from '@reduxjs/toolkit';
import { Film } from '../../types/film';
import { FilmsData } from '../../types/state';
import {
  addToMyListRequest,
  loadFilmFailed,
  loadFilmRequest,
  loadFilmsFailed,
  loadFilmsRequest,
  loadFilmsSuccess,
  loadFilmSuccess,
  loadMyListFailed,
  loadMyListRequest,
  loadMyListSuccess,
  loadPromoFailed,
  loadPromoRequest,
  loadPromoSuccess,
  loadSimilarFilmsFailed,
  loadSimilarFilmsRequest,
  loadSimilarFilmsSuccess,
  updateFilmFavouriteStatus
} from '../action';

const initialState: FilmsData = {
  isFilmsLoading: false,
  isFilmsError: false,
  films: [],
  isPromoLoading: false,
  isPromoError: false,
  promo: {} as Film,
  isFilmLoading: false,
  isFilmError: false,
  film: {} as Film,
  isSimilarFilmsLoading: false,
  isSimilarFilmsError: false,
  similarFilms: [],
  isMyListLoading: false,
  isMyListError: false,
  myList: [] as Film[],
  isAddMyListLoading: false,
};

const filmsData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFilmsRequest, (state, action) => {
      state.isFilmsLoading = action.payload;
    })
    .addCase(loadFilmsSuccess, (state, action) => {
      state.films = action.payload;
    })
    .addCase(loadFilmsFailed, (state) => {
      state.isFilmsError = true;
    })
    .addCase(loadPromoRequest, (state, action) => {
      state.isPromoLoading = action.payload;
    })
    .addCase(loadPromoSuccess, (state, action) => {
      state.promo = action.payload;
    })
    .addCase(loadPromoFailed, (state) => {
      state.isPromoError = true;
    })
    .addCase(loadFilmRequest, (state, action) => {
      state.isFilmLoading = action.payload;
    })
    .addCase(loadFilmSuccess, (state, action) => {
      state.film = action.payload;
    })
    .addCase(loadFilmFailed, (state) => {
      state.isFilmError = true;
    })
    .addCase(loadSimilarFilmsRequest, (state, action) => {
      state.isSimilarFilmsLoading = action.payload;
    })
    .addCase(loadSimilarFilmsSuccess, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(loadSimilarFilmsFailed, (state) => {
      state.isSimilarFilmsError = true;
    })
    .addCase(loadMyListRequest, (state, action) => {
      state.isMyListLoading = action.payload;
    })
    .addCase(loadMyListSuccess, (state, action) => {
      state.myList = action.payload;
    })
    .addCase(loadMyListFailed, (state) => {
      state.isMyListError = true;
    })
    .addCase(addToMyListRequest, (state, action) => {
      state.isAddMyListLoading = action.payload;
    })
    .addCase(updateFilmFavouriteStatus, (state, action) => {
      if (state.promo?.id === action.payload.id) {
        state.promo.isFavourite = action.payload.status;
      }
      if (state.film?.id === action.payload.id) {
        state.film.isFavourite = action.payload.status;
      }
    });
});

export { filmsData };
