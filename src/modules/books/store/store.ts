import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import booksReducer from './books';
import mybooksReducer from './my-books';

export const rootReducer = combineReducers({
  books: booksReducer,
  mybooks: mybooksReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type AppDispatch = typeof store.dispatch;
export default store;
