import {createSlice} from '@reduxjs/toolkit';
import {Book} from '../../domain/interfaces/Book';
import {loadBooks, loadNextPage, searchAuthor, refreshBooks} from './actions';
import {BooksLoadParams} from '../../domain/services/BookService';

export type State = {
  books: Book[] | null;
  isLoading: boolean;
  isRefreshing: boolean;
  loadParams: BooksLoadParams | null;
};

const BookSlice = createSlice({
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
    builder.addCase(loadBooks.pending, (state: State) => {
      state.isLoading = true;
    });
    builder.addCase(loadBooks.fulfilled, (state: State, {payload}) => {
      state.books = payload;
      state.isLoading = false;
    });
    builder.addCase(loadBooks.rejected, state => {
      state.isLoading = false;
    });

    // Refreshing
    builder.addCase(refreshBooks.pending, (state: State) => {
      state.isRefreshing = true;
    });
    builder.addCase(refreshBooks.fulfilled, (state: State, {payload}) => {
      state.books = payload;
      state.isRefreshing = false;
    });
    builder.addCase(refreshBooks.rejected, (state: State) => {
      state.isRefreshing = false;
    });

    // Load next page
    builder.addCase(loadNextPage.fulfilled, (state: State, {payload}) => {
      (state.books || []).push(...payload.books);
      state.loadParams = payload.loadParams;
    });

    // Search
    builder.addCase(searchAuthor.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(searchAuthor.fulfilled, (state: State, {payload}) => {
      state.books = payload;
      state.isLoading = false;
    });
    builder.addCase(searchAuthor.rejected, state => {
      state.isLoading = false;
    });
  },
});

const booksStore = BookSlice.reducer;
type booksStore = ReturnType<typeof booksStore>;
export default booksStore;
