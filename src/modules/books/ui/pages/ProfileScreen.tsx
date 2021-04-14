import React, {useCallback} from 'react';
import {Container} from 'native-base';
import {HeaderBar} from '../components/header';
import {useDispatch} from 'react-redux';
import {logOut} from '../../../auth/store/actions';
import ProfileMenu from '../components/profile-menu';
import {useTranslation} from 'react-i18next';

export default function ProfileScreen() {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const handleSignOut = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);
  return (
    <Container>
      <HeaderBar name={t('Profile')} />
      <ProfileMenu handleOnPress={handleSignOut} />
    </Container>
  );
}
