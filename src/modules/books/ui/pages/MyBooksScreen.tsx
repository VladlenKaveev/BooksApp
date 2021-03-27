import React, {useEffect} from 'react';
import {Card, CardItem, Container, Label} from 'native-base';
import {FlatList, Image, StyleSheet} from 'react-native';
import {HeaderBar} from '../components';
import LinearGradient from 'react-native-linear-gradient';
import {loadingSelector, myBooksSelector} from '../../store/selectors';
import {deleteMyBook, loadMyBooks} from '../../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import LoadingIndicator from '../components/LoadingIndicator';
import DisabledRatingStar from '../components/DisabledRatingStar';
import Icon from 'react-native-vector-icons/FontAwesome';

//переместить в index.tsx и прокинуть dispatch
export const MyBooksList = ({item}: any, dispatch: any) => {
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
        <CardItem>
          <Icon
            name="trash"
            size={19}
            color="#384F7D"
            onPress={() => dispatch(deleteMyBook(item.id))}
          />
        </CardItem>
      </Card>
    );
  }
};

export default function MyBooksScreen() {
  const dispatch = useDispatch();
  const myBooks = useSelector(myBooksSelector);
  const isLoading = useSelector(loadingSelector);
  useEffect(() => {
    dispatch(loadMyBooks());
  }, [dispatch]);
  return (
    <Container style={styles.container}>
      <LinearGradient colors={['#EEECFF', '#EEECFF', '#FFFFFF']}>
        <HeaderBar />
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <FlatList
            data={myBooks}
            renderItem={item => MyBooksList(item, dispatch)}
            keyExtractor={(item, id) => id.toString()}
            style={{height: '75%'}}
          />
        )}
      </LinearGradient>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    alignSelf: 'center',
    width: '88%',
    paddingVertical: 10,
    borderRadius: 12,
  },
  image: {
    width: 100,
    height: 150,
    margin: 5,
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
});
