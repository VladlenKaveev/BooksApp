import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Card, CardItem, Container, Input, Label} from 'native-base';
import {useDispatch} from 'react-redux';
import {HeaderBar} from '../components';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = () => {
    //dispatch()
  };
  return (
    <Container style={styles.container}>
      <HeaderBar name="Login" />
      <Card>
        <CardItem>
          <Input placeholder="E-mail" onChangeText={text => setEmail(text)} />
        </CardItem>
        <CardItem>
          <Input
            placeholder="Password"
            onChangeText={text => setPassword(text)}
          />
        </CardItem>
        <CardItem>
          <Button onPress={() => handleSubmit()} style={styles.button}>
            <Label style={styles.label}>Login</Label>
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
