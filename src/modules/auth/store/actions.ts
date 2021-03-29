import {createAsyncThunk} from '@reduxjs/toolkit';
import authRepository from '../domain/repositories/AuthRepository';

export const getAuthToken = createAsyncThunk('auth/getToken', async () => {
  try {
    return authRepository.load().then(payload => console.log(payload));
  } catch (e) {
    console.log(e);
    return e;
  }
});
