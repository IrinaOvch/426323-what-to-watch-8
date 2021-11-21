import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { rootReducer } from './store/root-reducer';
import { createAPI } from './services/api';
import { requireAuthorization } from './store/action';
import { AuthorizationStatus } from './const';
import { checkAuthAction, fetchFilms, fetchMyListAction, fetchPromo } from './store/api-actions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { redirect } from './store/middlewares/redirect';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

(store.dispatch)(checkAuthAction());
(store.dispatch)(fetchFilms());
(store.dispatch)(fetchPromo());
(store.dispatch)(fetchMyListAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
