import {createSlice} from '@reduxjs/toolkit';
import {Book} from '../../domain/interfaces/Book';
import {addMyBook, loadMyBooks, deleteMyBook} from '../my-books/actions';

export type State = {
  isLoading: boolean;
  isRefreshing: boolean;
  mybooks: Book[] | null;
  // loadParams: BooksLoadParams | null;
};

const MyBookSlice = createSlice({
  name: 'myBooks',
  initialState: {
    isLoading: false,
    isRefreshing: false,
    mybooks: [],
    // loadParams: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loadMyBooks.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(loadMyBooks.fulfilled, (state, {payload}) => {
      state.mybooks = payload;
      state.isLoading = false;
    });
    builder.addCase(addMyBook.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(addMyBook.fulfilled, (state, {payload}) => {
      state.mybooks = payload;
      state.isLoading = false;
    });
    builder.addCase(deleteMyBook.fulfilled, (state, {payload}) => {
      state.mybooks = payload;
    });
  },
});

const MyBooksStore = MyBookSlice.reducer;
type MyBooksStore = ReturnType<typeof MyBooksStore>;
export default MyBooksStore;
