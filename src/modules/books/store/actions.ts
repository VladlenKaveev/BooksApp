import {createAsyncThunk} from '@reduxjs/toolkit';
import {Book} from '../domain/interfaces/Book';
import bookRepository from '../domain/rest/repositories/BookRepository';
import axiosHttpResource from '../domain/custom/axiosHttpResource';
import myBooksService from '../domain/services/MyBooksService';

function changeID(books) {
  let count = Math.floor(Math.random() * Math.floor(10));
  return books.map(book => ({
    ...book,
    id: `${book.id}_${count}`,
  }));
}

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
