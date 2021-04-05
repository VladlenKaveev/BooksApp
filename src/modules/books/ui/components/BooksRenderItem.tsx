import {Card, CardItem, Label} from 'native-base';
import {Image, StyleSheet} from 'react-native';
import DisabledRatingStar from './DisabledRatingStar';
import React from 'react';

export const BooksRenderItem = ({item}: any) => {
  return (
    <Card style={styles.card}>
      <CardItem>
        <Image source={{uri: item.img_url}} style={styles.image} />
        <Label style={styles.book_name}>
          {item.book_name}
          {'\n'}
          <Label style={styles.book_author}>
            {item.book_author}
            {'\n'}
          </Label>
          <Label style={styles.book_author}>ID: {item.id}</Label>
        </Label>
        <DisabledRatingStar />
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 150,
    margin: 5,
  },
  card: {
    alignSelf: 'center',
    width: '88%',
    paddingVertical: 10,
    borderRadius: 12,
  },
  book_name: {
    fontSize: 18,
    fontFamily: 'CircularStd-Bold',
    color: '#384F7D',
  },
  book_author: {
    fontSize: 14,
    fontFamily: 'CircularStd-Medium',
    opacity: 0.7,
  },
  label: {
    marginTop: 10,
    fontSize: 19,
    alignSelf: 'center',
    fontFamily: 'CircularStd-Bold',
    color: 'white',
  },
});
