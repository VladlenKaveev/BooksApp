import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import LoginScreen from './index';
import {Provider} from 'react-redux';
import store from '../../../../../store';

it('Testing Login Component', async () => {
  const email = 'example@mail.ru';
  const password = 'example';
  const {getByTestId} = render(
    <Provider store={store}>
      <LoginScreen />
    </Provider>,
  );
  const emailInput = getByTestId('email');
  const passwordInput = getByTestId('password');
  const loginButton = getByTestId('login_button');
  await waitFor(() => {
    fireEvent.changeText(emailInput, email);
    fireEvent.changeText(passwordInput, password);
    fireEvent.press(loginButton);
  });
});
