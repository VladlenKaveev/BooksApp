import React from 'react';
import * as S from './styles';

interface SearchBarVariables {
  searchText: string;
  onSearchTextChanged: (text: string) => void;
  onSearchEndEditing: () => void;
}

export const SearchBar = ({
  searchText,
  onSearchTextChanged,
  onSearchEndEditing,
}: SearchBarVariables) => {
  return (
    <S.SearchContainer>
      <S.SearchInput
        placeholder="Search book"
        value={searchText}
        onChangeText={onSearchTextChanged}
        onEndEditing={onSearchEndEditing}
      />
    </S.SearchContainer>
  );
};
