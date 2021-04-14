import React, {useCallback} from 'react';
import {Container, Label} from 'native-base';
import {HeaderBar} from '../components/header';
import {useDispatch} from 'react-redux';
import {logOut} from '../../../auth/store/actions';
import ProfileMenu from '../components/profile-menu';
import {useTranslation} from 'react-i18next';
import i18n from '../../../../locales/index';
import * as S from './styles';

export default function ProfileScreen() {
  const {t} = useTranslation('Pages');
  const dispatch = useDispatch();
  const handleSignOut = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);
  const handleChangeLanguage = () => {
    i18n.changeLanguage('en');
  };
  return (
    <Container>
      <HeaderBar name={t('Profile')} />
      <ProfileMenu handleOnPress={handleSignOut} />
      <S.ChangeLanguageButton onPress={handleChangeLanguage}>
        <Label>{t('English')}</Label>
      </S.ChangeLanguageButton>
    </Container>
  );
}
