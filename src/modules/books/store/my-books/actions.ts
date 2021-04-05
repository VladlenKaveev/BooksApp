import {createAsyncThunk} from '@reduxjs/toolkit';
import {Book} from '../../domain/interfaces/Book';
import myBooksService from '../../domain/services/MyBooksService';

export const addMyBook = createAsyncThunk<Book[] | null, Book>(
  'mybooks/addBook',
  async book => {
    return myBooksService.add(book);
  },
);

export const deleteMyBook = createAsyncThunk<Book[] | null, number>(
  'mybooks/deleteBook',
  async id => {
    return myBooksService.delete(id);
  },
);

export const loadMyBooks = createAsyncThunk<Book[] | null>(
  'mybooks/getBook',
  async () => {
    return myBooksService.loadMyBooks();
  },
);
