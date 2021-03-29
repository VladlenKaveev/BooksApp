import {createSlice} from '@reduxjs/toolkit';
import {getAuthToken} from './actions';

export type State = {
  isLogin: boolean;
  authToken: string;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false,
    authToken: '',
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAuthToken.fulfilled, (state, {payload}) => {
      state.authToken = payload;
    });
  },
});

const authStore = authSlice.reducer;
type authStore = ReturnType<typeof authStore>;
export default authStore;
