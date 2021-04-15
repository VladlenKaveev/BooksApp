import {createSelector} from '@reduxjs/toolkit';

export const welcomeStateSelector = state => state.welcome;

export const hasOnboardedSelector = createSelector(
  welcomeStateSelector,
  state => state.hasOnboarded,
);
