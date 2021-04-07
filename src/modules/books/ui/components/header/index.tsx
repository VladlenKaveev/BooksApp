import React from 'react';
import * as S from './styles';

type Props = {
  name: string;
};

export const HeaderBar = ({name}: Props) => {
  return (
    <S.Header>
      <S.HeaderLabel>{name}</S.HeaderLabel>
    </S.Header>
  );
};
