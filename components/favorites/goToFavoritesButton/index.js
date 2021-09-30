import React from 'react';
import { Button } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { SCREEN_NAMES } from '../../../constants';

export const GoToFavoritesButton = () => {
  const { navigate } = useNavigation();

  const goToFavorites = () => {
    navigate(SCREEN_NAMES.FAVORITES);
  };

  return (
    <Button onPress={goToFavorites}>
      <AntDesign name="heart" size={25} color="black" />
    </Button>
  );
};
