import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { FILMS } from './mocks/films';

const PROMO_ID = 4;

ReactDOM.render(
  <React.StrictMode>
    <App
      promoId = {PROMO_ID}
      films = {FILMS}
    />
  </React.StrictMode>,
  document.getElementById('root'));
