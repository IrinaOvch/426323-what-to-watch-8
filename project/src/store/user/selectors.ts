import { NameSpace } from '../root-reducer';
import { State } from '../../types/state';
import { UserInfo } from '../../types/user-info';
import { AuthorizationStatus } from '../../const';

export const getLoginLoadingStatus = (state: State): boolean => state[NameSpace.User].isLoginLoading;
export const getLoginErrorStatus = (state: State): boolean => state[NameSpace.User].isLoginError;
export const getAuthData = (state: State): UserInfo => state[NameSpace.User].authData;
export const getisLogoutLoadingStatus = (state: State): boolean => state[NameSpace.User].isLogoutLoading;
export const getLogoutErrorStatus = (state: State): boolean => state[NameSpace.User].isLogoutError;
export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
