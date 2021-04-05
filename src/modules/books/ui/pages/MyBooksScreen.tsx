import React, {useEffect} from 'react';
import {Container} from 'native-base';
import {FlatList, StyleSheet} from 'react-native';
import {HeaderBar} from '../components';
import LinearGradient from 'react-native-linear-gradient';
import {loadingSelector} from '../../store/books/selectors';
import {myBooksSelector} from '../../store/my-books/selectors';
import {loadMyBooks} from '../../store/my-books/actions';
import {useDispatch, useSelector} from 'react-redux';
import {Loading} from '../components';
import {MyBooksList} from '../components';

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
        <HeaderBar name="My Books" />
        {isLoading ? (
          <Loading />
        ) : (
          <FlatList
            data={myBooks}
            renderItem={item => MyBooksList(item, dispatch)}
            keyExtractor={item => item.id}
            style={{height: '80%'}}
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
