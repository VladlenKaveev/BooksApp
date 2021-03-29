import {createAsyncThunk} from '@reduxjs/toolkit';
import {Book} from '../../domain/interfaces/Book';
import bookRepository from '../../domain/rest/repositories/BookRepository';
import {changeID} from '../../domain/helpers/ChangeBooksID';
import {pageParamsSelector} from './selectors';
import bookService, {BooksLoadParams} from '../../domain/custom/BookService';

const defaultLoadParams = {
  page: 1,
  per_page: 20,
};

export const searchAuthor = createAsyncThunk<{
  books: Book[] | null;
  loadParams: BooksLoadParams | null;
}>('books/searchAuthor', async searchText => {
  try {
    // const loadParams = {searchText, page: 1, per_page: 20};
    const loadParams = {search: {searchText}};
    return bookService.load(loadParams).then(books => {
      return books.data;
      // return {books: changeID(books), loadParams};
    });
  } catch (e) {
    console.log(e);
    return e;
  }
});

export const loadNextPage = createAsyncThunk<{
  books: Book[] | null;
  loadParams: BooksLoadParams | null;
}>('books/loadNextPage', async (_, thunkAPI) => {
  try {
    const currentLoadParams = pageParamsSelector(thunkAPI.getState());
    const newLoadParams = {...currentLoadParams, page: currentLoadParams + 1};
    return bookRepository.load(newLoadParams).then(books => {
      return {books: changeID(books), loadParams: newLoadParams};
    });
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error);
  }
});

export const refreshBooks = createAsyncThunk<Book[] | null>(
  'books/refreshBooks',
  async () => {
    try {
      return bookRepository.load(defaultLoadParams);
      // return bookService.load(defaultLoadParams);
    } catch (error) {
      console.log(error);
      return error;
    }
  },
);

export const loadBooks = createAsyncThunk<Book[] | null>(
  'books/loadBooks',
  async () => {
    try {
      return bookRepository.load(defaultLoadParams);
      // return bookService.load(defaultLoadParams);
    } catch (error) {
      console.log(error);
      return error;
    }
  },
);
