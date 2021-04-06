import {Label, ListItem, Right} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import * as S from './styles';

const ProfileMenuItem = ({item, handleOnPress}) => {
  return (
    <ListItem style={{paddingTop: 20}} onPress={handleOnPress}>
      <S.IconContainer>
        <S.Icons name={item.icon} size={16} color="#384F7D" />
      </S.IconContainer>
      <S.BodyLabel>
        <Label>{item.title}</Label>
      </S.BodyLabel>
      <Right>
        <Icon name="angle-right" size={16} color="#384F7D" />
      </Right>
    </ListItem>
  );
};

export default ProfileMenuItem;
