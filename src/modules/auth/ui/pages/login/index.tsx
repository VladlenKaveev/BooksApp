import React, {useCallback, useState} from 'react';
import {Card, CardItem, Input, Container} from 'native-base';
import {useDispatch} from 'react-redux';
import {HeaderBar} from '../../../../books/ui/components/header';
import {logIn} from '../../../store/actions';
import {AuthCredentials} from '../../../domain/interfaces/AuthCredentials';
import UdButton from '../../../../ud-ui/components/ud-button';

export default function LoginScreen() {
  const dispatch = useDispatch();
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
      <HeaderBar name="Login" />
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
          <UdButton
            variant="primary"
            title="LOGIN"
            onPress={handleSubmit}
            testID="login_button"
          />
        </CardItem>
      </Card>
    </Container>
  );
}
