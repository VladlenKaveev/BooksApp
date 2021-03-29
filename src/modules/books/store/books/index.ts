import {createSlice} from '@reduxjs/toolkit';
import {Book} from '../../domain/interfaces/Book';
import {loadBooks, loadNextPage, searchAuthor, refreshBooks} from './actions';
import {BooksLoadParams} from '../../domain/custom/BookService';

export type State = {
  books: Book[] | null;
  isLoading: boolean;
  isRefreshing: boolean;
  loadParams: BooksLoadParams | null;
};

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    isLoading: false,
    isRefreshing: false,
    loadParams: null,
  },
  reducers: {},
  extraReducers: builder => {
    // Initial load
    builder.addCase(loadBooks.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(loadBooks.fulfilled, (state, {payload}) => {
      state.books = payload;
      state.isLoading = false;
    });
    builder.addCase(loadBooks.rejected, (state, {payload}) => {
      state.isLoading = false;
    });

    // Refreshing
    builder.addCase(refreshBooks.pending, state => {
      state.isRefreshing = true;
    });
    builder.addCase(refreshBooks.fulfilled, (state, {payload}) => {
      state.books = payload;
      state.isRefreshing = false;
    });
    builder.addCase(refreshBooks.rejected, (state, {payload}) => {
      state.isRefreshing = false;
    });

    // Load next page
    builder.addCase(loadNextPage.fulfilled, (state, {payload}) => {
      (state.books || []).push(...payload.books);
      state.loadParams = payload.loadParams;
    });

    // Search
    builder.addCase(searchAuthor.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(searchAuthor.fulfilled, (state, {payload}) => {
      state.books = payload;
      state.isLoading = false;
    });
    builder.addCase(searchAuthor.rejected, (state, {payload}) => {
      state.isLoading = false;
    });
  },
});

const booksStore = bookSlice.reducer;
type booksStore = ReturnType<typeof booksStore>;
export default booksStore;
