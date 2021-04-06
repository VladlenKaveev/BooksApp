import React from 'react';
import * as S from './styles';

export const HeaderBar = ({name}) => {
  return (
    <S.Header>
      <S.HeaderLabel>{name}</S.HeaderLabel>
    </S.Header>
  );
};
