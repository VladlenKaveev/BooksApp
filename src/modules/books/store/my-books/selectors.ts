import {createSelector} from '@reduxjs/toolkit';

export const mybooksStateSelector = state => state.mybooks;

export const myBooksSelector = createSelector(
  mybooksStateSelector,
  state => state.mybooks,
);
