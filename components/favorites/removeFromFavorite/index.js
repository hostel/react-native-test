import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';

import { removeFromFavoriteAction } from '../actions';

export const RemoveFromFavorite = ({ item }) => {
  const dispatch = useDispatch();

  const onPress = () => {
    dispatch(removeFromFavoriteAction(item));
  };

  return (
    <Button onPress={onPress}>
      <AntDesign name="heart" size={25} color={'tomato'} />
    </Button>
  );
};
