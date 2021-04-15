import React, {useCallback, useState, useEffect} from 'react';
import {Card, CardItem, Input, Container} from 'native-base';
import {useDispatch} from 'react-redux';
import {HeaderBar} from '../../../../books/ui/components/header';
import {logIn} from '../../../store/actions';
import {AuthCredentials} from '../../../domain/interfaces/AuthCredentials';
import UdButton from '../../../../ud-ui/components/ud-button';
import {useTranslation} from 'react-i18next';
import {KeyboardAvoidingView, Platform} from 'react-native';

export default function LoginScreen() {
  const {t} = useTranslation('Pages');
  const dispatch = useDispatch();
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 10 : 0;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = useCallback(() => {
    const credentials: AuthCredentials = {
      email: email,
      password: password,
    };
    dispatch(logIn(credentials));
  }, [dispatch, email, password]);
  return (
    <Container>
      <HeaderBar name={t('Login')} />
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}>
        <Card>
          <CardItem>
            <Input
              testID="email"
              placeholder="E-mail"
              value={email}
              onChangeText={text => {
                setEmail(text);
              }}
            />
          </CardItem>
          <CardItem>
            <Input
              testID="password"
              value={password}
              placeholder="Password"
              onChangeText={text => setPassword(text)}
            />
          </CardItem>
          <CardItem>
            <Input placeholder="Name" />
          </CardItem>
          <CardItem>
            <Input placeholder="Surname" />
          </CardItem>
          <CardItem>
            <Input placeholder="Friend name" />
          </CardItem>
          <CardItem>
            <Input placeholder="Second friend name" />
          </CardItem>
          <CardItem>
            <UdButton
              variant="primary"
              title={t('LoginButton')}
              onPress={handleSubmit}
              testID="login_button"
            />
          </CardItem>
        </Card>
      </KeyboardAvoidingView>
    </Container>
  );
}
