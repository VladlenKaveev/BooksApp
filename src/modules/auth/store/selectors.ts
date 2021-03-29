import {createSelector} from '@reduxjs/toolkit';

export const authStateSelector = state => state.auth;

export const isLoginSelector = createSelector(
  authStateSelector,
  state => state.isLogin,
);
