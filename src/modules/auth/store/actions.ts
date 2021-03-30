import {createAsyncThunk} from '@reduxjs/toolkit';
import authRepository from '../domain/repositories/AuthRepository';
import authService from '../domain/services/AuthService';

export const userLogin = createAsyncThunk<any>(
  'auth/userLogin',
  async (_, thunkAPI) => {
    try {
      const access_token = 'qwerty12345'; //имитация
      // authRepository.load(); получаем токен
      await authService.store(access_token);
      return access_token;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const deleteToken = createAsyncThunk<any>('auth/deleteToken', () => {
  try {
    return authService.delete();
  } catch (e) {
    console.log(e);
  }
});

export const getToken = createAsyncThunk<any>(
  'auth/getToken',
  async (_, thunkAPI) => {
    try {
      return await authService.load().then(token => {
        return token;
      });
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e);
    }
  },
);
