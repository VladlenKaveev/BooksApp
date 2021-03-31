import React, {useCallback, useEffect, useState} from 'react';
import {Container, Input, Item, Label} from 'native-base';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {BooksList, HeaderBar} from '../components';
import {useDispatch, useSelector} from 'react-redux';
import {
  loadBooks,
  loadNextPage,
  refreshBooks,
  searchAuthor,
} from '../../store/books/actions';
import LinearGradient from 'react-native-linear-gradient';
import {
  booksSelector,
  loadingSelector,
  refreshingSelector,
} from '../../store/books/selectors';
import LoadingIndicator from '../components/LoadingIndicator';

export default function BooksScreen({navigation}: any) {
  const dispatch = useDispatch();
  const books: any = useSelector(booksSelector);
  const isLoading: boolean = useSelector(loadingSelector);
  const isRefreshing: boolean = useSelector(refreshingSelector);
  const [searchText, setSearchText] = useState('');
  const [
    endReachedCalledDuringMomentum,
    setEndReachedCalledDuringMomentum,
  ] = useState(true);

  const onSearchTextChanged = useCallback(
    text => {
      setSearchText(text);
      if (text === '') {
        setEndReachedCalledDuringMomentum(false);
        dispatch(loadBooks());
      } else {
        setEndReachedCalledDuringMomentum(true);
      }
    },
    [dispatch, setSearchText],
  );

  const onSearchEndEditing = useCallback(() => {
    dispatch(searchAuthor(searchText));
  }, [searchText, dispatch]);

  const onListEndReached = useCallback(() => {
    if (!isLoading && !isRefreshing && !endReachedCalledDuringMomentum) {
      dispatch(loadNextPage());
    }
  }, [dispatch, isLoading, isRefreshing, endReachedCalledDuringMomentum]);

  const onListRefresh = useCallback(() => {
    dispatch(refreshBooks());
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadBooks());
  }, [dispatch]);
  return (
    <Container style={styles.container}>
      <LinearGradient colors={['#EEECFF', '#EEECFF', '#FFFFFF']}>
        <HeaderBar name="Books" />
        <Item style={styles.search_container}>
          <Input
            placeholder="Search book"
            style={styles.search}
            value={searchText}
            onChangeText={onSearchTextChanged}
            onEndEditing={onSearchEndEditing}
          />
        </Item>
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
            onEndReached={onListEndReached}
            refreshing={isRefreshing}
            onRefresh={onListRefresh}
            onEndReachedThreshold={0.1}
            ListFooterComponent={() => {
              if (!isLoading) {
                return null;
              }
              return <ActivityIndicator />;
            }}
            onMomentumScrollBegin={() => {
              setEndReachedCalledDuringMomentum(false);
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
  search_container: {
    flex: 1,
    alignItems: 'flex-end',
    paddingHorizontal: '7%',
    borderColor: 'transparent',
  },
  search: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
});
