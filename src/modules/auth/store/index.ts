import {createSlice} from '@reduxjs/toolkit';
import {checkLogin, logOut, logIn} from './actions';
import {AuthCredentials} from '../domain/interfaces/AuthCredentials';

export type State = {
  credentials: AuthCredentials | null;
  isLoading: boolean;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    response: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(logIn.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(logIn.fulfilled, (state, {payload}) => {
      state.response = payload;
      state.isLoading = false; // не работает rejected :(
    });
    builder.addCase(logIn.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(logOut.fulfilled, state => {
      state.response = null;
    });
    builder.addCase(checkLogin.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(checkLogin.fulfilled, (state, {payload}) => {
      state.response = payload;
      state.isLoading = false; // не работает rejected :(
    });
    builder.addCase(checkLogin.rejected, state => {
      state.isLoading = false;
    });
  },
});

const authStore = authSlice.reducer;
type authStore = ReturnType<typeof authStore>;
export default authStore;
