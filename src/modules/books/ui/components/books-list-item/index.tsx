import {CardItem} from 'native-base';
import DisabledRatingStar from '../DisabledRatingStar';
import React from 'react';
import * as S from './styles';

//добавить тип
const BooksListItem = ({item}) => {
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
        <DisabledRatingStar />
      </CardItem>
    </S.BookCard>
  );
};

export default BooksListItem;
