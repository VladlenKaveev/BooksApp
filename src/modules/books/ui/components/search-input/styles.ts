import styled from '@emotion/native';
import {Item, Input} from 'native-base';

export const SearchContainer = styled(Item)`
  flex: 1;
  align-items: flex-end;
  padding-left: 7%;
  padding-right: 7%;
  border-color: transparent;
`;

export const SearchInput = styled(Input)`
  background-color: white;
  border-radius: 10px;
`;
