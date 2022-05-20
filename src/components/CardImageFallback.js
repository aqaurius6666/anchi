import React from 'react';
import {Image, useWindowDimensions} from 'react-native';

export const CardImageFallback = () => {
  const window = useWindowDimensions();

  return (
    <Image
      style={{
        width: window.width,
        height: window.width,
      }}
      source={require('../../assets/foods/fallback.png')}
    />
  );
};
