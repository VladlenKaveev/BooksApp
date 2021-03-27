import React, {useEffect} from 'react';
import {Container} from 'native-base';
import {FlatList, StyleSheet} from 'react-native';
import {BooksList, HeaderBar} from '../components';
import LinearGradient from 'react-native-linear-gradient';
import {loadingSelector, myBooksSelector} from '../../store/selectors';
import {loadMyBooks} from '../../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import LoadingIndicator from '../components/LoadingIndicator';

export default function MyBooksScreen() {
  const dispatch = useDispatch();
  const myBooks = useSelector(myBooksSelector);
  // console.log(myBooks);
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
            data={myBooks} //убрать это
            renderItem={({item}) => <BooksList item={item} />}
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
});
