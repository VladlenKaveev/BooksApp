import {createSelector} from '@reduxjs/toolkit';

export const authStateSelector = state => state.auth;

export const authTokenSelector = createSelector(
  authStateSelector,
  state => state.authToken,
);

export const isLoadingSelector = createSelector(
  authStateSelector,
  state => state.isLoading,
);
