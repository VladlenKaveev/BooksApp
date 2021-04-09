import React from 'react';
import {ThemeProvider} from '@emotion/react';
import * as S from './styles';

const colors = {
  success: 'green',
  dark: 'black',
  failed: 'red',
  primary: '#d55e5e',
};

const theme: Themes = {
  primary: {
    backgroundColor: colors.primary,
  },
  success: {
    backgroundColor: colors.success,
  },
  dark: {
    backgroundColor: colors.dark,
  },
  failed: {
    backgroundColor: colors.failed,
  },
};

export type Themes = {
  primary: {
    backgroundColor: string;
  };
  success: {
    backgroundColor: string;
  };
  dark: {
    backgroundColor: string;
  };
  failed: {
    backgroundColor: string;
  };
};

export type Props = {
  variant?: string;
  title: string;
  onPress?: () => void;
  testID?: string;
};

const UdButton = ({variant, title, onPress, testID}: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <S.CustomButton variant={variant} onPress={onPress} testID={testID}>
        <S.CustomLabel>{title}</S.CustomLabel>
      </S.CustomButton>
    </ThemeProvider>
  );
};

export default UdButton;
