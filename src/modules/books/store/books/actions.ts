import {createAsyncThunk} from '@reduxjs/toolkit';
import {Book} from '../../domain/interfaces/Book';
import bookRepository from '../../domain/rest/repositories/BookRepository';
import {changeID} from '../../domain/helpers/ChangeBooksID';
import {pageParamsSelector} from './selectors';
import bookService, {BooksLoadParams} from '../../domain/services/BookService';
import backgroundTaskService from '../../domain/bg-tasks/services/BackgroundTaskService';

const defaultLoadParams = {
  page: 1,
  per_page: 20,
};

export const searchAuthor = createAsyncThunk<{
  books: Book[] | null;
  loadParams: BooksLoadParams | null;
}>('books/searchAuthor', async searchText => {
  const loadParams = {search: {searchText}};
  return bookService.load(loadParams).then(books => {
    return books.data;
  });
});

export const loadNextPage = createAsyncThunk<{
  books: Book[] | null;
  loadParams: BooksLoadParams | null;
}>('books/loadNextPage', async (_, thunkAPI) => {
  const currentLoadParams = pageParamsSelector(thunkAPI.getState());
  const newLoadParams = {...currentLoadParams, page: currentLoadParams + 1};
  return bookRepository.load(newLoadParams).then(books => {
    return {books: changeID(books), loadParams: newLoadParams};
  });
});

export const refreshBooks = createAsyncThunk<Book[] | null>(
  'books/refreshBooks',
  () => {
    return bookRepository.load(defaultLoadParams);
    // return bookService.load(defaultLoadParams);
  },
);

export const loadBooks = createAsyncThunk<Book[] | null | Error>(
  'books/loadBooks',
  () => {
    // return bookRepository.load(defaultLoadParams);
    // return bookService.load(defaultLoadParams);
    return backgroundTaskService.loadTaskResult();
  },
);
