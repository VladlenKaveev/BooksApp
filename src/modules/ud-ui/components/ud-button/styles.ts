import styled from '@emotion/native';
import {Button} from 'native-base';
import {Themes} from './index';

type Props = {
  variant: string;
  theme: Themes;
};

const getButtonBgColorByVariant = (props: Props) => {
  switch (props.variant) {
    case 'failed':
      return props.theme.failed;
    case 'success':
      return props.theme.success;
    case 'dark':
      return props.theme.dark;
    case 'primary':
      return props.theme.primary;
  }
};

export const CustomButton = styled(Button)`
  flex: 1;
  justify-content: center;
  background-color: ${(props: Props) => getButtonBgColorByVariant(props)};
`;

export const CustomLabel = styled.Text`
  color: white;
`;
