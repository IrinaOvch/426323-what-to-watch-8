import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';
import { UserProcess } from '../../types/state';
import { UserInfo } from '../../types/user-info';
import { loginFailed, loginRequest, loginSuccess, logoutFailed, logoutRequest, logoutSuccess, requireAuthorization, requireLogout } from '../action';

const initialState: UserProcess = {
  isLoginLoading: false,
  isLoginError: false,
  authData: {} as UserInfo,
  isLogoutLoading: false,
  isLogoutError: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const userProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(requireLogout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loginRequest, (state, action) => {
      state.isLoginLoading = action.payload;
    })
    .addCase(loginSuccess, (state, action) => {
      state.authData = action.payload;
    })
    .addCase(loginFailed, (state, action) => {
      state.isLoginError = action.payload;
    })
    .addCase(logoutRequest, (state, action) => {
      state.isLogoutLoading = action.payload;
    })
    .addCase(logoutSuccess, (state) => {
      state.authData = {} as UserInfo;
    })
    .addCase(logoutFailed, (state, action) => {
      state.isLogoutError = action.payload;
    });
});

export { userProcess };
