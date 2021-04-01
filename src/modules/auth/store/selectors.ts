import {createSelector} from '@reduxjs/toolkit';

export const authStateSelector = state => state.auth;

export const responseSelector = createSelector(
  authStateSelector,
  state => state.response,
);

export const isLoadingSelector = createSelector(
  authStateSelector,
  state => state.isLoading,
);
