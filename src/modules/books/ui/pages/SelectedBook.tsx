import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {
  Container,
  Card,
  CardItem,
  Label,
  Text,
  Button,
  Item,
} from 'native-base';
import {HeaderBar} from '../components';
import RatingStar from '../components/RatingStar';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch} from 'react-redux';
import {addMyBook} from '../../store/my-books/actions';

function SelectedBook({route}: any) {
  const {id, book_name, book_author, description, img_url} = route.params;
  const payload = {id, book_author, book_name, img_url};
  const dispatch = useDispatch();
  return (
    <Container style={{flex: 1}}>
      <HeaderBar name="Book" />
      <Card style={styles.card} transparent>
        <CardItem>
          <Image source={{uri: img_url}} style={styles.image} key={id} />
          <Text style={styles.book_name}>
            {book_name}
            {'\n'}
            <Text style={styles.book_author}>
              {book_author}
              {'\n'}
            </Text>
            <Icon name="star" size={10} color="#445984" />{' '}
            <Label style={styles.rating}>3.58</Label>
          </Text>
        </CardItem>
        <CardItem>
          <Text style={styles.description}>{description}</Text>
        </CardItem>
        <CardItem>
          <Label style={styles.full_description}>Full Synopsis</Label>
        </CardItem>
        <Item style={{marginVertical: 30}} />
        <CardItem style={{alignSelf: 'center'}}>
          <Label style={styles.label}>TAP TO ADD RATING</Label>
        </CardItem>
        <CardItem style={{alignSelf: 'center'}}>
          <RatingStar />
        </CardItem>
        <CardItem>
          <Button
            style={{
              flex: 1,
              justifyContent: 'center',
              backgroundColor: '#6790FB',
            }}
            onPress={() => {
              dispatch(addMyBook(payload));
            }}>
            <Label style={styles.button_label}>TAKE A BOOK</Label>
          </Button>
        </CardItem>
      </Card>
    </Container>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 130,
    height: 200,
    margin: 5,
    borderRadius: 5,
  },
  label: {
    color: '#384F7D',
    opacity: 0.8,
    fontFamily: 'CircularStd-Medium',
    fontSize: 12,
  },
  button_label: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'CircularStd-Medium',
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
  description: {
    fontSize: 14,
    fontFamily: 'CircularStd-Book',
    color: '#384F7D',
    opacity: 0.8,
    lineHeight: 22,
  },
  rating: {
    fontSize: 12,
    lineHeight: 15,
  },
  full_description: {
    color: '#384F7D',
    fontFamily: 'CircularStd-Bold',
    fontSize: 12,
    textDecorationLine: 'underline',
    lineHeight: 22,
  },
  card: {
    flex: 1,
  },
});

export default SelectedBook;
