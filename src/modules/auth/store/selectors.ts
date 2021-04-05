import {createSelector} from '@reduxjs/toolkit';
import {State} from './index';

export const authStateSelector = (state: State) => state.auth;

export const isAuthLoadingSelector = createSelector(
  authStateSelector,
  state => state.isLoading,
);

export const isUserLoginSelector = createSelector(
  authStateSelector,
  state => state.isLogin,
);
