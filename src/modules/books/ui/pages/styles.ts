import styled from '@emotion/native';
import {Button, Item, CardItem} from 'native-base';

export const ResultsLabel = styled.Text`
  font-size: 13px;
  font-family: 'CircularStd-Medium';
  padding: 15px 7%;
  opacity: 0.5;
`;

export const ImageContainer = styled.Image`
  width: 130px;
  height: 200px;
  margin: 5px;
  border-radius: 5px;
`;

export const Description = styled.Text`
  font-size: 14px;
  font-family: 'CircularStd-Book';
  color: #384f7d;
  opacity: 0.8;
  line-height: 22px;
`;

export const FullDescription = styled.Text`
  color: #384f7d;
  font-family: 'CircularStd-Bold';
  font-size: 12px;
  text-decoration-line: underline;
  line-height: 22px;
`;

export const Raiting = styled.Text`
  font-size: 12px;
  line-height: 15px;
`;

export const TakeBookButton = styled(Button)`
  flex: 1;
  justify-content: center;
  background-color: #6790fb;
`;

export const TakeBookButtonLabel = styled.Text`
  color: white;
  font-size: 14px;
  font-family: 'CircularStd-Medium';
`;

export const AddRatingLabel = styled.Text`
  color: #384f7d;
  opacity: 0.8;
  font-family: 'CircularStd-Medium';
  font-size: 12px;
`;

export const Line = styled(Item)`
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const AddRatingContainer = styled(CardItem)`
  justify-content: center;
`;

export const RatingStarContainer = styled(CardItem)`
  align-self: center;
`;

export const ChangeLanguageButton = styled(Button)`
  width: 90%;
  align-self: center;
  justify-content: center;
  background-color: #6790fb;
`;
