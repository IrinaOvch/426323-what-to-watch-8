import { NameSpace } from '../root-reducer';
import { State } from '../../types/state';
import { Film } from '../../types/film';
import { ALL_GENRES, GENRES_MAX_AMOUNT } from '../../const';
import { createSelector } from 'reselect';

export const getFilmsLoadingStatus = (state: State): boolean => state[NameSpace.Films].isFilmsLoading;
export const getFilmsErrorStatus = (state: State): boolean => state[NameSpace.Films].isFilmsError;
export const getFilms = (state: State): Film[] => state[NameSpace.Films].films;
export const getPromoLoadingStatus = (state: State): boolean => state[NameSpace.Films].isPromoLoading;
export const getPromoErrorStatus = (state: State): boolean => state[NameSpace.Films].isPromoError;
export const getPromo = (state: State): Film => state[NameSpace.Films].promo;
export const getFilmLoadingStatus = (state: State): boolean => state[NameSpace.Films].isFilmLoading;
export const getFilmErrorStatus = (state: State): boolean => state[NameSpace.Films].isFilmError;
export const getFilm = (state: State): Film => state[NameSpace.Films].film;
export const getSimilarFilmsLoadingStatus = (state: State): boolean => state[NameSpace.Films].isSimilarFilmsLoading;
export const getSimilarFilmsErrorStatus = (state: State): boolean => state[NameSpace.Films].isSimilarFilmsError;
export const getSimilarFilms = (state: State): Film[] => state[NameSpace.Films].similarFilms;
export const getMyListStatus = (state: State): boolean => state[NameSpace.Films].isMyListLoading;
export const getMyListErrorStatus = (state: State): boolean => state[NameSpace.Films].isMyListError;
export const getMyList = (state: State): Film[] => state[NameSpace.Films].myList;

export const getGenres = createSelector([getFilms], (films) => {
  const genres = [...new Set([ALL_GENRES, ...films.map((film) => film.genre)])];

  return genres.slice(0, GENRES_MAX_AMOUNT - 1);
});

