import {createAsyncThunk} from '@reduxjs/toolkit';
import {Book} from '../domain/interfaces/Book';
import bookRepository from '../domain/rest/repositories/BookRepository';
import axiosHttpResource from '../domain/custom/axiosHttpResource';
import axiosSearchHttpResource from '../domain/custom/axiosSearchHttpResource';
import myBooksService from '../domain/services/MyBooksService';
import {changeID} from '../domain/services/BooksService';

export const searchAuthor = createAsyncThunk<Book | null>(
  'books/searchAuthor',
  async searchText => {
    try {
      return axiosSearchHttpResource('books?search=' + searchText).then(
        payload => {
          return payload.data;
        },
      );
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
