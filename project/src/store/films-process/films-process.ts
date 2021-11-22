import { createReducer } from '@reduxjs/toolkit';
import { FILMS_SHOWN_PER_CLICK } from '../../const';
import { FilmsProcess } from '../../types/state';
import { changeGenre, incrementFilmsShownAmount, resetFilmsShownAmount } from '../action';

const initialState: FilmsProcess = {
  currentGenre: 'All genres',
  filmsShownAmount: FILMS_SHOWN_PER_CLICK,
};

const filmsProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload;
    })
    .addCase(incrementFilmsShownAmount, (state, action) => {
      state.filmsShownAmount = state.filmsShownAmount + action.payload;
    })
    .addCase(resetFilmsShownAmount, (state) => {
      state.filmsShownAmount = initialState.filmsShownAmount;
    });
});

export { filmsProcess };
