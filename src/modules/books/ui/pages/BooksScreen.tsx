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
import {Book} from '../../domain/interfaces/Book';
import * as S from './styles';
import BottomSheetTab from '../components/bottom-sheet';
import {useTranslation} from 'react-i18next';
import flurryService from '../../../analytics/domain/flurry';

type Props = {
  item: Book;
};

export default function BooksScreen() {
  const {t} = useTranslation('Pages');
  const dispatch = useDispatch();
  const [sheetItem, setSheetItem] = useState(null);
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
  const sheetRef = React.useRef(null);
  useEffect(() => {
    dispatch(loadBooks());
  }, [dispatch]);
  return (
    <Container>
      <HeaderBar name={t('Books')} />
      <SearchBar
        searchText={searchText}
        onSearchEndEditing={onSearchEndEditing}
        onSearchTextChanged={onSearchTextChanged}
      />
      <S.ResultsLabel>{t('Results')}</S.ResultsLabel>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <>
          <BooksList
            books={books}
            isLoading={isLoading}
            isRefreshing={isRefreshing}
            onListEndReached={onListEndReached}
            onListRefresh={onListRefresh}
            renderItem={({item}: Props) => (
              <TouchableOpacity
                onPress={() => {
                  flurryService.createEvent('Book Views Event', item.book_name);
                  setSheetItem(item);
                  sheetRef.current?.snapTo(0);
                }}>
                <BooksListItem item={item} />
              </TouchableOpacity>
            )}
          />
          <BottomSheetTab sheetRef={sheetRef} item={sheetItem} />
        </>
      )}
    </Container>
  );
}
