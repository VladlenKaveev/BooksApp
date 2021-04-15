import React, {useCallback, useState} from 'react';
import {Card, CardItem, Text} from 'native-base';
import RatingStars from '../components/rating-stars';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch} from 'react-redux';
import {addMyBook} from '../../store/my-books/actions';
import {BookName, BookAuthor} from '../components/books-list-item/styles';
import * as S from './styles';
import {Book} from '../../domain/interfaces/Book';
import flurryService from '../../../analytics/domain/flurry';

type Props = {
  item: Book | null;
};

export default function SelectedBook({item}: Props) {
  const dispatch = useDispatch();
  const [lengthMore, setLengthMore] = useState(false);
  const [textShown, setTextShown] = useState(false);
  const numberOfLines = 2;
  const onTextLayout = useCallback(
    e => {
      setLengthMore(e.nativeEvent.lines.length >= numberOfLines);
    },
    [setLengthMore],
  );
  const toggleNumberOfLines = () => {
    setTextShown(!textShown);
  };
  const handleTakeBook = useCallback(() => {
    const analyticData = {
      id: item.id,
      name: item.book_name,
    };
    dispatch(addMyBook(item));
    flurryService.bookViews('Take Book Event', analyticData);
  }, [dispatch, item]);
  return (
    <>
      {item == null ? (
        <Text>;(</Text>
      ) : (
        <Card transparent>
          <CardItem>
            <S.ImageContainer source={{uri: item.img_url}} key={item.id} />
            <BookName>
              {item.book_name}
              {'\n'}
              <BookAuthor>
                {item.book_author}
                {'\n'}
              </BookAuthor>
              <Icon name="star" size={10} color="#445984" />{' '}
              <S.Raiting>3.58</S.Raiting>
            </BookName>
          </CardItem>
          <CardItem>
            <S.Description
              onTextLayout={onTextLayout}
              numberOfLines={textShown ? undefined : numberOfLines}>
              {item.description}
            </S.Description>
          </CardItem>
          <CardItem>
            {lengthMore ? (
              <S.FullDescription onPress={toggleNumberOfLines}>
                {textShown ? 'Hide' : 'Full synopsis'}
              </S.FullDescription>
            ) : null}
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
      )}
    </>
  );
}
