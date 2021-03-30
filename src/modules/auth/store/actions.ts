import {createAsyncThunk} from '@reduxjs/toolkit';
import authRepository from '../domain/repositories/AuthRepository';
import authService from '../domain/services/AuthService';

export const userLogin = createAsyncThunk(
  'auth/userLogin',
  async (_, thunkAPI) => {
    try {
      return authRepository.load().then(payload => {
        console.log(payload);
      });
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e);
    }
  },
);

export const setAuthToken = createAsyncThunk(
  'auth/setToken',
  async (token: string, thunkAPI) => {
    try {
      authService.store(token);
      return token;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);
