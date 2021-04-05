import {createSelector} from '@reduxjs/toolkit';
import {State} from './index';

export const booksStateSelector = (state: State) => state.books;

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
