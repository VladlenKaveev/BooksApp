import {FlatList} from 'react-native';
import React from 'react';
import ProfileMenuItem from '../profile-menu-item';
import {Headlines} from '../../../domain/interfaces/MenuHeadlines';
import {useTranslation} from 'react-i18next';

type Props = {
  handleOnPress: () => void;
};

export default function ProfileMenu({handleOnPress}: Props) {
  const {t} = useTranslation('ProfileMenu');
  const MenuHeadlines: Headlines[] = [
    {id: '1', title: t('Account'), icon: 'user'},
    {id: '2', title: t('Notifications'), icon: 'bell'},
    {id: '3', title: t('Privacy'), icon: 'lock'},
    {id: '4', title: t('HelpCenter'), icon: 'compass'},
    {id: '5', title: t('General'), icon: 'info-circle'},
    {id: '6', title: t('SignOut'), icon: 'user-o'},
  ];
  return (
    <FlatList
      data={MenuHeadlines}
      renderItem={({item}) => (
        <ProfileMenuItem handleOnPress={handleOnPress} item={item} />
      )}
      keyExtractor={(item: Headlines) => item.id}
    />
  );
}
