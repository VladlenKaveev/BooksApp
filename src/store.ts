import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import booksReducer from './modules/books/store/books';
import mybooksReducer from './modules/books/store/my-books';
import authReducer from './modules/auth/store';
import welcomeReducer from './modules/welcome/store';

export const rootReducer = combineReducers({
  books: booksReducer,
  mybooks: mybooksReducer,
  auth: authReducer,
  welcome: welcomeReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type AppDispatch = typeof store.dispatch;
export default store;
