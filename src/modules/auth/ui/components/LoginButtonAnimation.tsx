import React from 'react';
import * as S from './styles';

const LoginButtonAnimation = () => {
  return (
    <S.Animation
      source={require('../../../../../assets/open-book.json')}
      autoPlay
      loop
    />
  );
};

export default LoginButtonAnimation;
