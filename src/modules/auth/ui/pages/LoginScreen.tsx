import React, {useCallback, useState} from 'react';
import {Card, CardItem, Input, Container} from 'native-base';
import {useDispatch} from 'react-redux';
import {HeaderBar} from '../../../books/ui/components/header';
import {logIn} from '../../store/actions';
import {AuthCredentials} from '../../domain/interfaces/AuthCredentials';
import LoginButtonAnimation from '../components/LoginButtonAnimation';
import * as S from './styles';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = useCallback(() => {
    const credentials: AuthCredentials = {
      email: email,
      password: password,
    };
    dispatch(logIn(credentials));
  }, [dispatch, email, password]);
  return (
    <Container>
      <HeaderBar name="Login" />
      <Card>
        <CardItem>
          <Input
            placeholder="E-mail"
            value={email}
            onChangeText={text => {
              setEmail(text);
            }}
          />
        </CardItem>
        <CardItem>
          <Input
            value={password}
            placeholder="Password"
            onChangeText={text => setPassword(text)}
          />
        </CardItem>
        <S.LoginButton onPress={handleSubmit} block>
          <LoginButtonAnimation />
        </S.LoginButton>
      </Card>
    </Container>
  );
}
