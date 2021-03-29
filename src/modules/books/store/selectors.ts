import {createSelector} from '@reduxjs/toolkit';

export const booksStateSelector = state => state.books;
export const mybooksStateSelector = state => state.mybooks;

export const myBooksSelector = createSelector(
  mybooksStateSelector,
  state => state.mybooks,
);

export const booksSelector = createSelector(
  booksStateSelector,
  state => state.books,
);

export const loadingSelector = createSelector(
  booksStateSelector,
  state => state.isLoading,
);

export const pageParamsSelector = createSelector(
  booksStateSelector,
  state => state.loadParams,
);

export const refreshingSelector = createSelector(
  booksStateSelector,
  state => state.isRefreshing,
);
