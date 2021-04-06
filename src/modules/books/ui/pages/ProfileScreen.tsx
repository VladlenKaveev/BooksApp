import React from 'react';
import {Container} from 'native-base';
import {HeaderBar} from '../components/header';
import {useDispatch} from 'react-redux';
import {logOut} from '../../../auth/store/actions';
import ProfileMenu from '../components/profile-menu';

export default function ProfileScreen() {
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(logOut());
  };
  return (
    <Container>
      <HeaderBar name="Settings" />
      <ProfileMenu handleOnPress={handleSignOut} />
    </Container>
  );
}
