import React, {useCallback} from 'react';
import {Container} from 'native-base';
import {HeaderBar} from '../components/header';
import {useDispatch} from 'react-redux';
import {logOut} from '../../../auth/store/actions';
import ProfileMenu from '../components/profile-menu';
import {useTranslation} from 'react-i18next';
import i18n from '../../../../locales/index';
import * as S from './styles';
import {STORAGE_KEY} from '../../../../locales';
import storageService from '../../../core/services/AsyncStorage';

export default function ProfileScreen() {
  const {t} = useTranslation('Pages');
  const dispatch = useDispatch();
  const handleSignOut = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);
  const handleChangeLanguage: (lng: string) => void = lng => {
    i18n.changeLanguage(lng);
    storageService.storeData(STORAGE_KEY, lng);
  };
  return (
    <Container>
      <HeaderBar name={t('Profile')} />
      <ProfileMenu handleOnPress={handleSignOut} />
      <S.ChangeLanguageButton onPress={() => handleChangeLanguage('en')}>
        <S.ChangeLanguageButtonLabel>
          {t('English')}
        </S.ChangeLanguageButtonLabel>
      </S.ChangeLanguageButton>
      <S.ChangeLanguageButton onPress={() => handleChangeLanguage('ru')}>
        <S.ChangeLanguageButtonLabel>{t('Russia')}</S.ChangeLanguageButtonLabel>
      </S.ChangeLanguageButton>
    </Container>
  );
}
