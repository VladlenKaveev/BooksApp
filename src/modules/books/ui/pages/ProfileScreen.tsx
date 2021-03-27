import React, {Component} from 'react';
import {Container, Card, CardItem, Button, Text} from 'native-base';
import {StyleSheet} from 'react-native';
import {HeaderBar} from '../components';

class ProfileScreen extends Component {
  render() {
    return (
      <Container styles={styles.container}>
        <HeaderBar />
        <Card>
          <CardItem>
            <Text>Profile Screen</Text>
          </CardItem>
        </Card>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default ProfileScreen;
