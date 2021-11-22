import { APIRoute, AppRoute, AuthorizationStatus, errorMessages } from '../const';
import { dropToken, saveToken } from '../services/token';
import { ThunkActionResult } from '../types/action';
import { AuthData } from '../types/auth-data';
import { FilmFromServerType } from '../types/film';
import { adaptFilmsToClient, adaptFilmToClient, adaptUserToClient } from '../utils/adapt-to-client';
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
  logoutSuccess,
  loadFilmRequest,
  loadFilmSuccess,
  loadFilmFailed,
  loadSimilarFilmsRequest,
  loadSimilarFilmsSuccess,
  loadSimilarFilmsFailed,
  loadFilmReviewsRequest,
  loadFilmReviewsSuccess,
  loadFilmReviewsFailed,
  postReviewRequest,
  loadMyListRequest,
  loadMyListSuccess,
  loadMyListFailed,
  addToMyListRequest,
  updateFilmFavouriteStatus
} from './action';
import { Review, ReviewToServer } from '../types/review';

const fetchFilms = (): ThunkActionResult => (
  async (dispatch, _, api): Promise<void> => {
    dispatch(loadFilmsRequest(true));
    try {
      const { data } = await api.get<FilmFromServerType[]>(APIRoute.Films);
      dispatch(loadFilmsSuccess(adaptFilmsToClient(data)));
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
      dispatch(loadPromoSuccess(adaptFilmToClient(data)));
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
      toast.warn('Please, don\'t forget to log in');
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
      await api.delete(APIRoute.Logout);
      dropToken();
      dispatch(requireLogout());
      dispatch(logoutSuccess());
      dispatch(redirectToRoute(AppRoute.Main));
    } catch {
      dispatch(logoutFailed(true));
      toast.error(errorMessages.logoutFailed);
    } finally {
      dispatch(logoutRequest(false));
    }
  }
);

const fetchFilmAction = (id: number): ThunkActionResult => (
  async (dispatch, _, api): Promise<void> => {
    dispatch(loadFilmRequest(true));
    try {
      const { data } = await api.get<FilmFromServerType>(`/films/${id}`);
      dispatch(loadFilmSuccess(adaptFilmToClient(data)));
    } catch (error) {
      dispatch(loadFilmFailed());
      dispatch(redirectToRoute(AppRoute.NotFound));
    } finally {
      dispatch(loadFilmRequest(false));
    }
  }
);

const fetchSimilarFilms = (id: number): ThunkActionResult => (
  async (dispatch, _, api): Promise<void> => {
    dispatch(loadSimilarFilmsRequest(true));
    try {
      const { data } = await api.get<FilmFromServerType[]>(`/films/${id}/similar`);
      dispatch(loadSimilarFilmsSuccess(adaptFilmsToClient(data)));
    } catch (error) {
      dispatch(loadSimilarFilmsFailed());
    } finally {
      dispatch(loadSimilarFilmsRequest(false));
    }
  }
);

const fetchFilmReviewsAction = (id: number): ThunkActionResult => (
  async (dispatch, _, api): Promise<void> => {
    dispatch(loadFilmReviewsRequest(true));
    try {
      const { data } = await api.get<Review[]>(`/comments/${id}`);
      dispatch(loadFilmReviewsSuccess(data));
    } catch (error) {
      dispatch(loadFilmReviewsFailed());
    } finally {
      dispatch(loadFilmReviewsRequest(false));
    }
  }
);

const postReviewAction = (id: number, review: ReviewToServer): ThunkActionResult => (
  async (dispatch, _, api): Promise<void> => {
    dispatch(postReviewRequest(true));
    try {
      await api.post<ReviewToServer>(`/comments/${id}`, review);
      dispatch(redirectToRoute(`/films/${id}`));
    } catch (error) {
      toast.error(errorMessages.genericError);
    } finally {
      dispatch(postReviewRequest(false));
    }
  }
);

const fetchMyListAction = (): ThunkActionResult => (
  async (dispatch, _, api): Promise<void> => {
    dispatch(loadMyListRequest(true));
    try {
      const { data } = await api.get<FilmFromServerType[]>(APIRoute.MyList);
      dispatch(loadMyListSuccess(adaptFilmsToClient(data)));
    } catch (error) {
      dispatch(loadMyListFailed());
    } finally {
      dispatch(loadMyListRequest(false));
    }
  }
);

const addToMyListAction = (id: number, status: number): ThunkActionResult => (
  async (dispatch, _, api): Promise<void> => {
    dispatch(addToMyListRequest(true));
    try {
      await api.post(`/favorite/${id}/${status}`);
      dispatch(updateFilmFavouriteStatus(id, Boolean(status)));
    } catch (error) {
      toast.error(errorMessages.genericError);
    } finally {
      dispatch(addToMyListRequest(false));
    }
  }
);

export {
  fetchFilms,
  fetchPromo,
  checkAuthAction,
  loginAction,
  logoutAction,
  fetchFilmAction,
  fetchSimilarFilms,
  fetchFilmReviewsAction,
  postReviewAction,
  fetchMyListAction,
  addToMyListAction
};

