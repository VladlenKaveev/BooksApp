import {createAsyncThunk} from '@reduxjs/toolkit';
import {Book} from '../../domain/interfaces/Book';
import myBooksService from '../../domain/services/MyBooksService';

export const addMyBook = createAsyncThunk<Book | null>(
  'myBooks/addBook',
  async book => {
    try {
      if (book !== null) {
        await myBooksService.add(book);
      }
      return myBooksService.load().then(function (payload) {
        return payload;
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  },
);

export const deleteMyBook = createAsyncThunk<number>(
  'myBooks/deleteBook',
  async id => {
    try {
      return myBooksService.delete(id);
    } catch (e) {
      console.log(e);
      return e;
    }
  },
);

export const loadMyBooks = createAsyncThunk<Book | null>(
  'myBooks/getBook',
  async () => {
    try {
      return myBooksService.load().then(function (payload) {
        return payload;
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  },
);
