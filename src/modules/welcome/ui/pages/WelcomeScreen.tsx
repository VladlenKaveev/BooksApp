import Onboarding from 'react-native-onboarding-swiper';
import React, {useCallback} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import {storeOnboarded} from '../../store/actions';

export default function WelcomeScreen() {
  const dispatch = useDispatch();
  const completeOnBoarding = useCallback(() => {
    dispatch(storeOnboarded(true));
  }, [dispatch]);

  return (
    <Onboarding
      onDone={completeOnBoarding}
      onSkip={completeOnBoarding}
      pages={[
        {
          backgroundColor: '#fff',
          image: <Icon name="book" size={45} color="#d55e5e" />,
          title: 'Читай!',
          subtitle: 'Если не умеешь читать, научим!',
        },
        {
          backgroundColor: '#fff',
          image: <Icon name="save" size={45} color="#d55e5e" />,
          title: 'Сохраняй!',
          subtitle: 'Добавляй понравившиеся книги в избранное!',
        },
        {
          backgroundColor: '#fff',
          image: <Icon name="user" size={45} color="#d55e5e" />,
          title: 'Новинки!',
          subtitle: 'Успей взять самую крутую книгу!',
        },
      ]}
    />
  );
}
