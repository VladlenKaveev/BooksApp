import {CardItem} from 'native-base';
import React from 'react';
import * as S from './styles';
import {Book} from '../../../domain/interfaces/Book';
import RatingStars from '../rating-stars';

type Props = {
  item: Book;
};

const BooksListItem = ({item}: Props) => {
  return (
    <S.BookCard>
      <CardItem>
        <S.ImageContainer source={{uri: item.img_url}} />
        <S.BookName>
          {item.book_name}
          {'\n'}
          <S.BookAuthor>
            {item.book_author}
            {'\n'}
            ID: {item.id}
          </S.BookAuthor>
        </S.BookName>
        <RatingStars item={item} disabled={true} />
      </CardItem>
    </S.BookCard>
  );
};

export default BooksListItem;
