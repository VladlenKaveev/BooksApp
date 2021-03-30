import {createSelector} from '@reduxjs/toolkit';

export const authStateSelector = state => state.auth;

export const isLoginSelector = createSelector(
  authStateSelector,
  state => state.isLogin,
);

export const authTokenSelector = createSelector(
  authStateSelector,
  state => state.authToken,
);

export const isLoadingSelector = createSelector(
  authStateSelector,
  state => state.isLoading,
);
