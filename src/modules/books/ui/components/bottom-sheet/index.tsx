import React, {RefObject} from 'react';
import BottomSheet from 'reanimated-bottom-sheet';
import BottomTabContent from '../bottom-sheet-content';
import Animated from 'react-native-reanimated';
import {Book} from '../../../domain/interfaces/Book';
import BottomSheetBehavior from 'reanimated-bottom-sheet';
import {StyleSheet} from 'react-native';
import * as S from './styles';

type Props = {
  item: Book | null;
  sheetRef: RefObject<BottomSheetBehavior> | string;
};

export default function BottomSheetTab({sheetRef, item}: Props) {
  const fall = new Animated.Value(1);

  const animatedShadowOpacity = Animated.interpolateNode(fall, {
    inputRange: [0, 1],
    outputRange: [0.5, 0],
  });
  return (
    <>
      <S.AnimatedShadowOpacity
        pointerEvents="none"
        style={[
          {
            ...StyleSheet.absoluteFillObject,
            opacity: animatedShadowOpacity,
          },
        ]}
      />
      <BottomSheet
        ref={sheetRef}
        snapPoints={[600, 100, 0]}
        borderRadius={25}
        renderContent={() => <BottomTabContent item={item} />}
        initialSnap={2}
        enabledContentGestureInteraction={true}
        callbackNode={fall}
      />
    </>
  );
}
