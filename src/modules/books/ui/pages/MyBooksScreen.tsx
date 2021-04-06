import React, {useEffect} from 'react';
import {Container} from 'native-base';
import {HeaderBar} from '../components/header';
import {loadingSelector} from '../../store/books/selectors';
import {myBooksSelector} from '../../store/my-books/selectors';
import {loadMyBooks} from '../../store/my-books/actions';
import {useDispatch, useSelector} from 'react-redux';
import LoadingIndicator from '../components/LoadingIndicator';
import BooksList from '../components/books-list';
import BooksListItem from '../components/books-list-item';

export default function MyBooksScreen() {
  const dispatch = useDispatch();
  const mybooks = useSelector(myBooksSelector);
  const isLoading = useSelector(loadingSelector);
  useEffect(() => {
    dispatch(loadMyBooks());
  }, [dispatch]);
  return (
    <Container>
      <HeaderBar name="My Books" />
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <BooksList books={mybooks} renderItem={item => BooksListItem(item)} />
      )}
    </Container>
  );
}
