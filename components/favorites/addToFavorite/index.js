import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';

import { addToFavoriteAction } from '../actions';

export const AddToFavorite = ({ item }) => {
  const dispatch = useDispatch();

  const onPress = () => {
    dispatch(addToFavoriteAction(item));
  };

  return (
    <Button onPress={onPress}>
      <AntDesign name="heart" size={25} color={'lightgray'} />
    </Button>
  );
};
