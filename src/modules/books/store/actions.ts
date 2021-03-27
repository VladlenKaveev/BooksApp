import {createAsyncThunk} from '@reduxjs/toolkit';
import {Book} from '../domain/interfaces/Book';
import bookRepository from '../domain/rest/repositories/BookRepository';
import axiosHttpResource from '../domain/custom/axiosHttpResource';
import myBooksService from '../domain/services/MyBooksService';

let count = 0;

function changeID(books) {
  count++;
  return books.map(book => ({
    ...book,
    id: `${book.id}_${count}`,
  }));
}

export const searchAuthor = createAsyncThunk<Book | null>(
  'books/searchAuthor',
  async searchText => {
    try {
      return axiosHttpResource('books?search=' + searchText).then(payload => {
        return payload.data;
      });
    } catch (e) {
      console.log(e);
      return e;
    }
  },
);

export const loadNextPage = createAsyncThunk<Book | null>(
  'books/loadNextPage',
  async () => {
    try {
      return bookRepository.load().then(books => {
        return books.concat(changeID(books));
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  },
);

export const loadBooks = createAsyncThunk<Book | null>(
  'books/loadBooks',
  async () => {
    try {
      return bookRepository.load();
    } catch (error) {
      console.log(error);
      return error;
    }
  },
);

export const axiosLoadBooks = createAsyncThunk<Book | null>(
  'books/loadBooks',
  async () => {
    try {
      return axiosHttpResource('books/');
    } catch (error) {
      console.log(error);
      return error;
    }
  },
);

export const addMyBook = createAsyncThunk<Book | null>(
  'books/addBook',
  async payload => {
    try {
      if (payload !== null) {
        await myBooksService.add(payload);
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

export const deleteMyBook = createAsyncThunk<Book | null>(
  'books/deleteBook',
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
  'books/getBook',
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
