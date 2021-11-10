import { APIRoute, AuthorizationStatus } from '../const';
import { dropToken, saveToken, Token } from '../services/token';
import { ThunkActionResult } from '../types/action';
import { AuthData } from '../types/auth-data';
import { FilmFromServerType } from '../types/film';
import { loadFilms, loadPromo, requireAuthorization, requireLogout } from './action';

const fetchFilms = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<FilmFromServerType[]>(APIRoute.Films);
    dispatch(loadFilms(data));
  };

const fetchPromo = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<FilmFromServerType>(APIRoute.Promo);
    dispatch(loadPromo(data));
  };

const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
      });
  };

const loginAction = ({ login: email, password }: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const { data: { token } } = await api.post<{ token: Token }>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  };

const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };

export { fetchFilms, fetchPromo, checkAuthAction, loginAction, logoutAction };

