import {createSelector} from '@reduxjs/toolkit';

export const booksStateSelector = state => state.books;

export const myBooksSelector = createSelector(
  booksStateSelector,
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

// export const pageSelector = createSelector(
//   booksStateSelector,
//   state => state.page,
// );

export const refreshSelector = createSelector(
  booksStateSelector,
  state => state.isRefresh,
);
