import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { dropToken, saveToken } from '../services/token';
import { ThunkActionResult } from '../types/action';
import { AuthData } from '../types/auth-data';
import { FilmFromServerType } from '../types/film';
import { adaptUserToClient } from '../utils/adapt-to-client';
import { toast } from 'react-toastify';
import {
  loadFilmsRequest,
  loadFilmsSuccess,
  loadFilmsFailed,
  loadPromoRequest,
  loadPromoSuccess,
  loadPromoFailed,
  requireAuthorization,
  requireLogout,
  login,
  redirectToRoute
} from './action';

const AUTH_FAIL_MESSAGE = 'We can’t recognize this email <br> and password combination. Please try again.';

const fetchFilms = (): ThunkActionResult => (
  async (dispatch, _, api): Promise<void> => {
    dispatch(loadFilmsRequest(true));
    try {
      const { data } = await api.get<FilmFromServerType[]>(APIRoute.Films);
      dispatch(loadFilmsSuccess(data));
    } catch (error) {
      dispatch(loadFilmsFailed());
    } finally {
      dispatch(loadFilmsRequest(false));
    }
  }
);


const fetchPromo = (): ThunkActionResult => (
  async (dispatch, _, api): Promise<void> => {
    dispatch(loadPromoRequest(true));
    try {
      const { data } = await api.get<FilmFromServerType>(APIRoute.Promo);
      dispatch(loadPromoSuccess(data));
    } catch (e) {
      dispatch(loadPromoFailed());
    } finally {
      dispatch(loadPromoRequest(false));
    }
  }
);

const checkAuthAction = (): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    try {
      const { data } = await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(login(adaptUserToClient(data)));
    } catch {
      toast.info(AUTH_FAIL_MESSAGE);
      dispatch(redirectToRoute(AppRoute.SignIn));
    }
  }
);

const loginAction = ({ email, password }: AuthData): ThunkActionResult => (
  async (dispatch, _, api) => {
    const { data: { token, ...userInfo } } = await api.post(APIRoute.Login, { email, password });
    dispatch(login(adaptUserToClient(userInfo)));
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  }
);

const logoutAction = (): ThunkActionResult => (
  async (dispatch, _, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  }
);

export { fetchFilms, fetchPromo, checkAuthAction, loginAction, logoutAction };

