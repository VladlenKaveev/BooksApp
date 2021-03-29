import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import booksReducer from './books';
import mybooksReducer from './my-books';
import authReducer from './../../auth/store/index';

export const rootBooksReducer = combineReducers({
  books: booksReducer,
  mybooks: mybooksReducer,
  auth: authReducer,
});

const store = configureStore({
  reducer: rootBooksReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type AppDispatch = typeof store.dispatch;
export default store;
