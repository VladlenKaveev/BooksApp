import React, {useCallback} from 'react';
import {Container, Card, CardItem, Item} from 'native-base';
import {HeaderBar} from '../components/header';
import RatingStars from '../components/rating-stars';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch} from 'react-redux';
import {addMyBook} from '../../store/my-books/actions';
import {BookName, BookAuthor} from '../components/books-list-item/styles';
import * as S from './styles';

export default function SelectedBook({route}: any) {
  const {id, book_name, book_author, description, img_url, item} = route.params;
  const dispatch = useDispatch();
  const handleTakeBook = useCallback(() => {
    dispatch(addMyBook(route.params));
  }, [dispatch, route.params]);
  return (
    <Container>
      <HeaderBar name="Book" />
      <Card transparent>
        <CardItem>
          <S.ImageContainer source={{uri: img_url}} key={id} />
          <BookName>
            {book_name}
            {'\n'}
            <BookAuthor>
              {book_author}
              {'\n'}
            </BookAuthor>
            <Icon name="star" size={10} color="#445984" />{' '}
            <S.Raiting>3.58</S.Raiting>
          </BookName>
        </CardItem>
        <CardItem>
          <S.Description>{description}</S.Description>
        </CardItem>
        <CardItem>
          <S.FullDescription>Full Synopsis</S.FullDescription>
        </CardItem>
        <S.Line />
        <S.AddRatingContainer>
          <S.AddRatingLabel>TAP TO ADD RATING</S.AddRatingLabel>
        </S.AddRatingContainer>
        <S.RatingStarContainer>
          <RatingStars item={item} />
        </S.RatingStarContainer>
        <CardItem>
          <S.TakeBookButton onPress={handleTakeBook}>
            <S.TakeBookButtonLabel>TAKE A BOOK</S.TakeBookButtonLabel>
          </S.TakeBookButton>
        </CardItem>
      </Card>
    </Container>
  );
}
