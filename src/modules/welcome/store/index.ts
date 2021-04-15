import {createSlice} from '@reduxjs/toolkit';
import {checkOnboarded, storeOnboarded} from './actions';

export type State = {
  hasOnboarded: boolean;
};

const welcomeSlice = createSlice({
  name: 'welcome',
  initialState: {
    hasOnboarded: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(storeOnboarded.fulfilled, (state: State) => {
      state.hasOnboarded = true;
    });
    builder.addCase(checkOnboarded.fulfilled, (state: State, {payload}) => {
      if (payload !== null) {
        state.hasOnboarded = true;
      }
    });
  },
});

const welcomeStore = welcomeSlice.reducer;
type welcomeStore = ReturnType<typeof welcomeStore>;
export default welcomeStore;
