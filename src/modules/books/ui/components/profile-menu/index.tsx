import {FlatList} from 'react-native';
import React from 'react';
import ProfileMenuItem from '../profile-menu-item';
import {Book} from '../../../domain/interfaces/Book';

const MenuHeadlines = [
  {id: 1, title: 'Account', icon: 'user'},
  {id: 2, title: 'Notifications', icon: 'bell'},
  {id: 3, title: 'Privacy', icon: 'lock'},
  {id: 4, title: 'Help Center', icon: 'compass'},
  {id: 5, title: 'General', icon: 'info-circle'},
  {id: 6, title: 'Sign Out', icon: 'user-o'},
];

//сделать интерфейс или тип для item

export default function ProfileMenu({handleOnPress}) {
  return (
    <FlatList
      data={MenuHeadlines}
      renderItem={({item}) => (
        <ProfileMenuItem handleOnPress={handleOnPress} item={item} />
      )}
      keyExtractor={item => item.id}
    />
  );
}
