import {createAsyncThunk} from '@reduxjs/toolkit';
import authService from '../domain/services/AuthService';
import {AuthCredentials} from '../domain/interfaces/AuthCredentials';
import {UserData} from '../domain/interfaces/UserData';

export const logIn = createAsyncThunk<UserData, AuthCredentials>(
  'auth/logIn',
  async credentials => {
    return await authService.login(credentials).then(userData => {
      return userData;
    });
  },
);

export const logOut = createAsyncThunk<any>('auth/logOut', () => {
  return authService.logout();
});

export const checkLogin = createAsyncThunk<UserData | null>(
  'auth/checkLogin',
  () => {
    return authService.checkLogin();
  },
);
