import {createAsyncThunk} from '@reduxjs/toolkit';
import authService from '../domain/services/AuthService';
import {AuthCredentials} from '../domain/interfaces/AuthCredentials';
import {AuthResponse} from '../domain/interfaces/AuthResponse';

export const logIn = createAsyncThunk<AuthResponse, AuthCredentials>(
  'auth/logIn',
  async credentials => {
    return await authService.login(credentials).then(response => {
      return response;
    });
  },
);

export const logOut = createAsyncThunk<any>('auth/logOut', () => {
  return authService.logout();
});

export const checkLogin = createAsyncThunk<AuthResponse | null>(
  'auth/checkLogin',
  () => {
    return authService.checkLogin();
  },
);
