import React from 'react';
import {Container, Label, ListItem, Body, Right} from 'native-base';
import {StyleSheet} from 'react-native';
import {HeaderBar} from '../components';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {logOut} from '../../../auth/store/actions';
import {responseSelector} from '../../../auth/store/selectors';

export default function ProfileScreen() {
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(logOut());
  };
  const response = useSelector(responseSelector);
  return (
    <Container style={styles.container}>
      <LinearGradient colors={['#EEECFF', '#EEECFF', '#FFFFFF']}>
        <HeaderBar name="Settings" />
        <ListItem style={{paddingTop: 20}}>
          <Icon name="user" size={16} color="#384F7D" />
          <Body style={styles.body}>
            <Label>Account</Label>
          </Body>
          <Right>
            <Icon name="angle-right" size={16} color="#384F7D" />
          </Right>
        </ListItem>
        <ListItem>
          <Icon name="bell" size={16} color="#384F7D" />
          <Body style={styles.body}>
            <Label>Notifications</Label>
          </Body>
          <Right>
            <Icon name="angle-right" size={16} color="#384F7D" />
          </Right>
        </ListItem>
        <ListItem>
          <Icon name="lock" size={16} color="#384F7D" />
          <Body style={styles.body}>
            <Label>Privacy</Label>
          </Body>
          <Right>
            <Icon name="angle-right" size={16} color="#384F7D" />
          </Right>
        </ListItem>
        <ListItem>
          <Icon name="compass" size={16} color="#384F7D" />
          <Body style={styles.body}>
            <Label>Help Center</Label>
          </Body>
          <Right>
            <Icon name="angle-right" size={16} color="#384F7D" />
          </Right>
        </ListItem>
        <ListItem>
          <Icon name="info-circle" size={16} color="#384F7D" />
          <Body style={styles.body}>
            <Label>General</Label>
          </Body>
          <Right>
            <Icon name="angle-right" size={16} color="#384F7D" />
          </Right>
        </ListItem>
        <ListItem onPress={() => handleSignOut()}>
          <Icon name="user-o" size={16} color="#384F7D" />
          <Body style={styles.body}>
            <Label>Sign Out</Label>
          </Body>
          <Right>
            <Icon name="angle-right" size={16} color="#384F7D" />
          </Right>
        </ListItem>
      </LinearGradient>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    paddingLeft: 8,
  },
});
