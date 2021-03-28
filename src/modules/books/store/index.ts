import {createSlice} from '@reduxjs/toolkit';
import {Book} from '../domain/interfaces/Book';
import {
  addMyBook,
  axiosLoadBooks,
  loadMyBooks,
  loadBooks,
  loadNextPage,
  searchAuthor,
  deleteMyBook,
} from './actions';

export type State = {
  books: Book | null;
  isLoading: boolean;
  isRefresh: boolean;
  mybooks: any;
  // page: number;
};

const bookSlice = createSlice<State>({
  name: 'books',
  initialState: {
    books: null,
    isLoading: false,
    isRefresh: false,
    mybooks: null,
    // page: 0,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loadBooks.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(loadBooks.fulfilled, (state, {payload}) => {
      state.books = payload;
      state.isLoading = false;
    });
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
    builder.addCase(loadNextPage.pending, state => {
      state.isRefresh = true;
    });
    builder.addCase(loadNextPage.fulfilled, (state, {payload}) => {
      // state.page = state.page + 1;
      state.isRefresh = false;
      state.books = payload;
    });
    builder.addCase(searchAuthor.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(searchAuthor.fulfilled, (state, {payload}) => {
      state.books = payload;
      state.isLoading = false;
    });
    builder.addCase(deleteMyBook.fulfilled, (state, {payload}) => {
      state.mybooks = payload;
    });
  },
});

const booksStore = bookSlice.reducer;
type booksStore = ReturnType<typeof booksStore>;
export default booksStore;
