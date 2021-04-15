import {createSlice} from '@reduxjs/toolkit';
import {Book} from '../../domain/interfaces/Book';
import {addMyBook, loadMyBooks, deleteMyBook} from './actions';

export type State = {
  isLoading: boolean;
  isRefreshing: boolean;
  mybooks: Book[] | null;
};

const MyBookSlice = createSlice({
  name: 'mybooks',
  initialState: {
    mybooks: [],
    isLoading: false,
    isRefreshing: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loadMyBooks.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(loadMyBooks.fulfilled, (state: State, {payload}) => {
      state.mybooks = payload;
      state.isLoading = false;
    });
    builder.addCase(addMyBook.pending, (state: State) => {
      state.isLoading = true;
    });
    builder.addCase(addMyBook.fulfilled, (state: State, {payload}) => {
      state.mybooks = payload;
      state.isLoading = false;
    });
    builder.addCase(deleteMyBook.fulfilled, (state: State, {payload}) => {
      state.mybooks = payload;
    });
  },
});

const myBooksStore = MyBookSlice.reducer;
type myBooksStore = ReturnType<typeof myBooksStore>;
export default myBooksStore;
