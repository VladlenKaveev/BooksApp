import {ActivityIndicator, ListRenderItem} from 'react-native';
import React from 'react';
import {Book} from '../../../domain/interfaces/Book';
import * as S from './styles';

interface BooksListVariables {
  books: Book[];
  renderItem: ListRenderItem<Book>;
  isLoading?: boolean;
  isRefreshing?: boolean;
  // onListEndReached?: void; что за тип?
  // onListRefresh?: void;
}

export default function BooksList({
  books,
  renderItem,
  isLoading,
  isRefreshing,
  onListEndReached,
  onListRefresh,
}: BooksListVariables) {
  return (
    <S.FlatlistContainer
      data={books}
      renderItem={renderItem}
      keyExtractor={item => item.id}
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
    />
  );
}
