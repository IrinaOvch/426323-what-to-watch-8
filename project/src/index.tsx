import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ThunkAppDispatch } from './types/action';
import App from './components/app/app';
import { reducer } from './store/reducer';
import { createAPI } from './services/api';
import { requireAuthorization } from './store/action';
import { AuthorizationStatus } from './const';
import { checkAuthAction, fetchFilms, fetchPromo } from './store/api-actions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { redirect } from './store/middlewares/redirect';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
  ),
);

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchFilms());
(store.dispatch as ThunkAppDispatch)(fetchPromo());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
