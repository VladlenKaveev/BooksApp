import React from 'react';
import * as S from './styles';
import {useTranslation} from 'react-i18next';

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
  const {t} = useTranslation('Components');
  return (
    <S.SearchContainer>
      <S.SearchInput
        placeholder={t('SearchBook')}
        value={searchText}
        onChangeText={onSearchTextChanged}
        onEndEditing={onSearchEndEditing}
      />
    </S.SearchContainer>
  );
};
