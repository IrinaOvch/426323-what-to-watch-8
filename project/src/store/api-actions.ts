import { APIRoute, AppRoute, AuthorizationStatus, errorMessages } from '../const';
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
  redirectToRoute,
  loginRequest,
  loginSuccess,
  loginFailed,
  logoutFailed,
  logoutRequest,
  logoutSuccess
} from './action';

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
      dispatch(loginSuccess(adaptUserToClient(data)));
    } catch {
      dispatch(redirectToRoute(AppRoute.SignIn));
    }
  }
);

const loginAction = ({ email, password }: AuthData): ThunkActionResult => (
  async (dispatch, _, api) => {
    dispatch(loginRequest(true));
    try {
      const { data: { token, ...userInfo } } = await api.post(APIRoute.Login, { email, password });
      dispatch(loginSuccess(adaptUserToClient(userInfo)));
      saveToken(token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(redirectToRoute(AppRoute.Main));
    } catch {
      dispatch((loginFailed(true)));
      toast.info(errorMessages.checkAuthFailMessage);
    } finally {
      dispatch(loginRequest(false));
    }
  }
);

const logoutAction = (): ThunkActionResult => (
  async (dispatch, _, api) => {
    dispatch(logoutRequest(true));
    try {
      api.delete(APIRoute.Logout);
      dropToken();
      dispatch(requireLogout());
      dispatch(logoutSuccess());
      dispatch(redirectToRoute(AppRoute.Main));
    } catch {
      dispatch(logoutFailed(true));
    } finally {
      dispatch(logoutRequest(false));
    }
  }
);

export { fetchFilms, fetchPromo, checkAuthAction, loginAction, logoutAction };

