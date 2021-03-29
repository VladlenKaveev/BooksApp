import React, {useEffect, useState} from 'react';
import StarRating from 'react-native-star-rating';
import {getData, storeData} from '../../../core/services/AsyncStorage';

export default function RatingStar() {
  // const [starCount, setStarCount] = useState(0);
  // useEffect(() => {
  //   getData('@rating').then(rating => {
  //     setStarCount(rating);
  //   });
  // }, []);
  return (
    <StarRating
      disabled={false}
      maxStars={5}
      // rating={starCount}
      // selectedStar={rating => {
      //   setStarCount(rating);
      //   storeData('@rating', rating);
      // }}
      containerStyle={{
        width: '30%',
        alignSelf: 'flex-end',
      }}
      starSize={20}
      fullStarColor="#FFD381"
    />
  );
}
