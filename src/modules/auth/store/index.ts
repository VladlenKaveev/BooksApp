import {createSlice} from '@reduxjs/toolkit';
import {deleteToken, userLogin, getToken} from './actions';

export type State = {
  authToken: string | null;
  isLoading: boolean;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authToken: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(userLogin.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, {payload}) => {
      state.authToken = payload;
      state.isLoading = false;
    });
    builder.addCase(userLogin.rejected, state => {
      state.isLoading = false; //опять не работает :( thunkAPI пробовал
    });
    builder.addCase(deleteToken.fulfilled, state => {
      state.authToken = null;
    });
    builder.addCase(getToken.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getToken.fulfilled, (state, {payload}) => {
      state.authToken = payload;
      state.isLoading = false;
    });
    builder.addCase(getToken.rejected, state => {
      state.isLoading = false; //опять не работает :( thunkAPI пробовал
    });
  },
});

const authStore = authSlice.reducer;
type authStore = ReturnType<typeof authStore>;
export default authStore;
