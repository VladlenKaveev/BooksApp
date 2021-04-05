import React from 'react';
import LottieView from 'lottie-react-native';

export default function WelcomeAnimation() {
  return (
    <LottieView
      style={{
        height: 120,
        alignSelf: 'center',
      }}
      source={require('../../../../../assets/open-book.json')}
      autoPlay
      loop
    />
  );
}
