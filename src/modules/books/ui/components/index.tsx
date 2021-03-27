import React from 'react';
import {Card, CardItem, Input, Label, Item} from 'native-base';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import DisabledRatingStar from './DisabledRatingStar';

const height = Dimensions.get('window').height;

export const HeaderBar = () => {
  return <View style={styles.header} />;
};

export const SearchBar = () => {
  return (
    <Item style={styles.search_container}>
      <Input placeholder="Search" style={styles.search} />
    </Item>
  );
};

export const BooksList = ({item}: any) => {
  if (item == null) {
    return <Label>Тут ничего нет :(</Label>;
  } else {
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
  }
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#D55E5E',
    height: height / 6,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
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
  search: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  search_container: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
