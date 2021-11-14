import { APIRoute, AuthorizationStatus } from '../const';
import { dropToken, saveToken, Token } from '../services/token';
import { ThunkActionResult } from '../types/action';
import { AuthData } from '../types/auth-data';
import { FilmFromServerType } from '../types/film';
import {
  loadFilmsRequest,
  loadFilmsSuccess,
  loadFilmsFailed,
  loadPromoRequest,
  loadPromoSuccess,
  loadPromoFailed,
  requireAuthorization,
  requireLogout
} from './action';

const fetchFilms = (): ThunkActionResult => (
  async (dispatch, _, api): Promise<void> => {
    dispatch(loadFilmsRequest(true));
    try {
      const { data } = await api.get<FilmFromServerType[]>(APIRoute.Films);
      dispatch(loadFilmsSuccess(data));
    } catch (e) {
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
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
      });
  }
);

const loginAction = ({ login: email, password }: AuthData): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    const { data: { token } } = await api.post<{ token: Token }>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  }
);

const logoutAction = (): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  }
);

export { fetchFilms, fetchPromo, checkAuthAction, loginAction, logoutAction };

