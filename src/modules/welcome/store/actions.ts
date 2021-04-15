import {createAsyncThunk} from '@reduxjs/toolkit';
import storageService from '../../core/services/AsyncStorage';

type Result = {
  hasOnboarded: boolean;
};

export const STORAGE_KEY = '@Onboarded';

export const checkOnboarded = createAsyncThunk<Result>(
  'welcome/checkOnboarded',
  async () => {
    return await storageService.getData(STORAGE_KEY).then(result => {
      return result;
    });
  },
);

export const storeOnboarded = createAsyncThunk<void>(
  'welcome/storeOnboarded',
  payload => {
    storageService.storeData(STORAGE_KEY, payload);
  },
);
