import React, {useCallback, useEffect, useState} from 'react';
import {Container} from 'native-base';
import {TouchableOpacity} from 'react-native';
import BooksList from '../components/books-list/index';
import {HeaderBar} from '../components/header';
import {useDispatch, useSelector} from 'react-redux';
import {
  loadBooks,
  loadNextPage,
  refreshBooks,
  searchAuthor,
} from '../../store/books/actions';
import {
  booksSelector,
  loadingSelector,
  refreshingSelector,
} from '../../store/books/selectors';
import LoadingIndicator from '../components/LoadingIndicator';
import BooksListItem from '../components/books-list-item';
import {SearchBar} from '../components/search-input';
import * as S from './styles';
import {Book} from '../../domain/interfaces/Book';

type Props = {
  item: Book;
  navigation: any;
};

export default function BooksScreen({navigation}: Props) {
  const dispatch = useDispatch();
  const books: any = useSelector(booksSelector);
  const isLoading: boolean = useSelector(loadingSelector);
  const [searchText, setSearchText] = useState('');
  const isRefreshing: boolean = useSelector(refreshingSelector);
  const onListEndReached = useCallback(() => {
    if (!isLoading && !isRefreshing) {
      dispatch(loadNextPage());
    }
  }, [dispatch, isLoading, isRefreshing]);
  const onListRefresh = useCallback(() => {
    dispatch(refreshBooks());
  }, [dispatch]);
  const onSearchTextChanged = useCallback(
    text => {
      setSearchText(text);
      if (text === '') {
        dispatch(loadBooks());
      }
    },
    [dispatch, setSearchText],
  );
  const onSearchEndEditing = useCallback(() => {
    dispatch(searchAuthor(searchText));
  }, [searchText, dispatch]);

  useEffect(() => {
    dispatch(loadBooks());
  }, [dispatch]);
  return (
    <Container>
      <HeaderBar name="Books" />
      <SearchBar
        searchText={searchText}
        onSearchEndEditing={onSearchEndEditing}
        onSearchTextChanged={onSearchTextChanged}
      />
      <S.ResultsLabel>RESULTS</S.ResultsLabel>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <BooksList
          books={books}
          isLoading={isLoading}
          isRefreshing={isRefreshing}
          onListEndReached={onListEndReached}
          onListRefresh={onListRefresh}
          renderItem={({item}: Props) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('SelectedBook', {
                  id: item.id,
                  book_name: item.book_name,
                  book_author: item.book_author,
                  description: item.description,
                  img_url: item.img_url,
                  item: item,
                })
              }>
              <BooksListItem item={item} />
            </TouchableOpacity>
          )}
        />
      )}
    </Container>
  );
}
