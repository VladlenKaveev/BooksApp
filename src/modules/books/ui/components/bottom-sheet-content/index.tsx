import React from 'react';
import * as S from './styles';
import SelectedBook from '../../pages/SelectedBook';
import {Book} from '../../../domain/interfaces/Book';

type Props = {
  item: Book | null;
};

const BottomTabContent = ({item}: Props) => {
  return (
    <S.BottomSheetCard>
      <SelectedBook item={item} />
    </S.BottomSheetCard>
  );
};

export default BottomTabContent;
