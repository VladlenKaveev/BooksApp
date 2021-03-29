import React from 'react';
import {Card, CardItem, Label} from 'native-base';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import DisabledRatingStar from './DisabledRatingStar';
import Icon from 'react-native-vector-icons/FontAwesome';
import {deleteMyBook} from '../../store/my-books/actions';

const height = Dimensions.get('window').height;

export const HeaderBar = ({name}) => {
  return (
    <View style={styles.header}>
      <Label style={styles.label}>{name}</Label>
    </View>
  );
};

export const MyBooksList = ({item}: any, dispatch: any) => {
  return (
    <Card style={styles.card}>
      <Icon
        name="trash"
        size={19}
        color="#D55E5E"
        onPress={() => dispatch(deleteMyBook(item.id))}
        style={{paddingLeft: 16}}
      />
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

export const BooksList = ({item}: any) => {
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
  header: {
    backgroundColor: '#D55E5E',
    height: height / 5,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    justifyContent: 'center',
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
  label: {
    marginTop: 10,
    fontSize: 19,
    alignSelf: 'center',
    fontFamily: 'CircularStd-Bold',
    color: 'white',
  },
});
