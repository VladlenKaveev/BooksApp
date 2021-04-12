import {ActivityIndicator, ListRenderItem} from 'react-native';
import React from 'react';
import {Book} from '../../../domain/interfaces/Book';
import * as S from './styles';

type Props = {
  books: Book[];
  renderItem: ListRenderItem<unknown>;
  isLoading?: boolean;
  isRefreshing?: boolean;
  onListEndReached?: () => void;
  onListRefresh?: () => void;
};

export default function BooksList({
  books,
  renderItem,
  isLoading,
  isRefreshing,
  onListEndReached,
  onListRefresh,
}: Props) {
  return (
    <S.FlatlistContainer
      data={books}
      renderItem={renderItem}
      keyExtractor={(item: Book) => item.id}
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
