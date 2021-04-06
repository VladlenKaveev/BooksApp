import styled from '@emotion/native';
import {Label} from 'native-base';

export const Header = styled.View`
  background-color: #d55e5e;
  height: 20%;
  border-bottom-left-radius: 100px;
  justify-content: center;
  border-bottom-right-radius: 100px;
`;

export const HeaderLabel = styled(Label)`
  margin-top: 10px;
  font-size: 19px;
  align-self: center;
  font-family: 'CircularStd-Bold';
  color: white;
`;
