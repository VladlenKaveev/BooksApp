import styled from '@emotion/native';
import {Card} from 'native-base';

export const BookCard = styled(Card)`
  align-self: center;
  width: 88%;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 12px;
`;

export const ImageContainer = styled.Image`
  width: 100px;
  height: 150px;
  margin: 5px;
`;

export const BookName = styled.Text`
  font-size: 18px;
  font-family: 'CircularStd-Bold';
  color: #384f7d;
`;

export const BookAuthor = styled.Text`
  font-size: 14px;
  font-family: 'CircularStd-Medium';
  opacity: 0.7;
`;

export const RatingStarContainer = styled.View`
  flex: 1;
  align-self: flex-end;
`;
