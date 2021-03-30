import {createSlice} from '@reduxjs/toolkit';
import {setAuthToken, userLogin} from './actions';

export type State = {
  isLogin: boolean;
  authToken: string | null;
  isLoading: boolean;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false,
    authToken: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(userLogin.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, {payload}) => {
      // state.authToken = payload;
      console.log(state.authToken);
    });
    builder.addCase(userLogin.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(setAuthToken.fulfilled, (state, {payload}) => {
      state.authToken = payload;
    });
  },
});

const authStore = authSlice.reducer;
type authStore = ReturnType<typeof authStore>;
export default authStore;
