import {createAsyncThunk} from '@reduxjs/toolkit';
import authRepository from '../domain/repositories/AuthRepository';
import authService from '../domain/services/AuthService';
import {AccessToken} from '../domain/interfaces/AccessToken';

export const userLogin = createAsyncThunk<AccessToken | null>(
  'auth/userLogin',
  async () => {
    return await authRepository.load().then(token => {
      authService.storeToken(token.access_token);
      return token.access_token;
    });
  },
);

export const deleteToken = createAsyncThunk<any>('auth/deleteToken', () => {
  return authService.delete();
});

export const getToken = createAsyncThunk<AccessToken | null>(
  'auth/getToken',
  async () => {
    return await authService.load().then(token => {
      return token;
    });
  },
);
