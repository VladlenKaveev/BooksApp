import {createSelector} from '@reduxjs/toolkit';
import {State} from './index';

export const mybooksStateSelector = (state: State) => state.mybooks;

export const myBooksSelector = createSelector(
  mybooksStateSelector,
  state => state.mybooks,
);
