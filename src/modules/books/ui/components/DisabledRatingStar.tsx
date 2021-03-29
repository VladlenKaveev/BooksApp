import React, {useEffect, useState} from 'react';
import StarRating from 'react-native-star-rating';
import {getData} from '../../../core/services/AsyncStorage';

export default function DisabledRatingStar() {
  const [starCount, setStarCount] = useState('');
  // useEffect(() => {
  //   getData('@rating').then(rating => {
  //     setStarCount(rating);
  //   });
  // }, []);
  return (
    <StarRating
      disabled={true}
      maxStars={5}
      // rating={starCount}
      starSize={20}
      fullStarColor="#FFD381"
      containerStyle={{
        width: '30%',
        alignSelf: 'flex-end',
      }}
    />
  );
}
