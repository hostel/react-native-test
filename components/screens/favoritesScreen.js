import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { GoToFavoritesButton } from '../favorites/goToFavoritesButton';
import { WrapList } from '../favorites/wrapList';

export const FavoritesScreen = (props) => {
  const { goBack } = useNavigation();

  return (
    <>
      <Appbar.Header dark={false} style={{ backgroundColor: 'darkturquoise' }}>
        <TouchableOpacity onPress={goBack}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Appbar.Content title="Favorites" />
        <GoToFavoritesButton />
      </Appbar.Header>
      <View style={styles.content}>
        <WrapList />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 8,
  },
});
