import {createSlice} from '@reduxjs/toolkit';
import {checkLogin, logOut, logIn} from './actions';

export type State = {
  isLoading: boolean;
  isLogin: boolean;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoading: false,
    isLogin: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(logIn.pending, (state: State) => {
      state.isLoading = true;
    });
    builder.addCase(logIn.fulfilled, (state: State) => {
      state.isLogin = true;
      state.isLoading = false;
    });
    builder.addCase(logIn.rejected, (state: State) => {
      state.isLoading = false;
    });
    builder.addCase(logOut.fulfilled, (state: State) => {
      state.isLogin = false;
    });
    builder.addCase(checkLogin.pending, (state: State) => {
      state.isLoading = true;
    });
    builder.addCase(checkLogin.fulfilled, (state: State, {payload}) => {
      state.isLogin = payload !== null;
      state.isLoading = false;
    });
    builder.addCase(checkLogin.rejected, (state: State) => {
      state.isLoading = false;
    });
  },
});

const authStore = authSlice.reducer;
type authStore = ReturnType<typeof authStore>;
export default authStore;
