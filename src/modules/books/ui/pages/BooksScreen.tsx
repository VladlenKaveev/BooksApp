import React, {useEffect, useState} from 'react';
import {Container, Label} from 'native-base';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {BooksList, HeaderBar, SearchBar} from '../components';
import {useDispatch, useSelector} from 'react-redux';
import {loadBooks, loadNextPage} from '../../store/actions';
import LinearGradient from 'react-native-linear-gradient';
import {
  booksSelector,
  loadingSelector,
  refreshSelector,
} from '../../store/selectors';
import LoadingIndicator from '../components/LoadingIndicator';

export default function BooksScreen({navigation}: any) {
  const dispatch = useDispatch();
  const books = useSelector(booksSelector);
  const isLoading = useSelector(loadingSelector);
  const isRefresh = useSelector(refreshSelector);
  const handleNextPage = () => {
    dispatch(loadNextPage());
  };
  useEffect(() => {
    dispatch(loadBooks());
  }, [dispatch]);
  return (
    <Container style={styles.container}>
      <LinearGradient colors={['#EEECFF', '#EEECFF', '#FFFFFF']}>
        <HeaderBar />
        <SearchBar />
        <Label style={styles.label}>RESULTS</Label>
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <FlatList
            data={books}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('SelectedBook', {
                    id: item.id,
                    book_name: item.book_name,
                    book_author: item.book_author,
                    description: item.description,
                    img_url: item.img_url,
                  })
                }>
                <BooksList item={item} />
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
            style={{height: '75%'}}
            onEndReached={() => handleNextPage()}
            onEndReachedThreshold={0.4}
            ListFooterComponent={() => {
              if (!isRefresh) {
                return null;
              }
              return <ActivityIndicator />;
            }}
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
  label: {
    fontSize: 13,
    fontFamily: 'CircularStd-Medium',
    paddingLeft: '8%',
    padding: 15,
    opacity: 0.5,
  },
});
