import React, {useCallback, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Button, Card, CardItem, Container, Input, Label} from 'native-base';
import {useDispatch} from 'react-redux';
import {HeaderBar} from '../../../books/ui/components';
import {logIn} from '../../store/actions';
import {AuthCredentials} from '../../domain/interfaces/AuthCredentials';
import WelcomeAnimation from '../components/WelcomeAnimation';

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
    <Container style={styles.container}>
      <HeaderBar name="Login" />
      <Card transparent>
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
        <CardItem>
          <Button onPress={handleSubmit} style={styles.button}>
            <WelcomeAnimation />
          </Button>
        </CardItem>
      </Card>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#D55E5E',
  },
  label: {
    color: 'white',
  },
});
