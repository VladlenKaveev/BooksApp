import React, {useEffect, useState, useCallback} from 'react';
import StarRating from 'react-native-star-rating';
import storageService from '../../../../core/services/AsyncStorage';
import {Book} from '../../../domain/interfaces/Book';
import * as S from './styles';

type Props = {
  item: Book;
  disabled?: boolean;
};

export default function RatingStars({item, disabled}: Props) {
  const [starCount, setStarCount] = useState(0);
  const PREFIX = '@rating' + item.id;
  const handleSelectedStar = useCallback(
    rating => {
      storageService.storeData(PREFIX, rating).then(() => setStarCount(rating));
    },
    [PREFIX],
  );
  useEffect(() => {
    storageService.getData(PREFIX).then(rating => setStarCount(rating));
  }, [PREFIX]);
  return (
    <S.RatingStarsContainer>
      <StarRating
        disabled={disabled}
        maxStars={5}
        rating={starCount}
        selectedStar={rating => handleSelectedStar(rating)}
        starSize={20}
        fullStarColor="#FFD381"
      />
    </S.RatingStarsContainer>
  );
}
