import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

import { WrapList } from '../song/wrapList';
import { GoToFavoritesButton } from '../favorites/goToFavoritesButton';

export const SongListScreen = (props) => {
  return (
    <>
      <Appbar.Header dark={false} style={{ backgroundColor: 'turquoise' }}>
        <Appbar.Content title="Search song" />
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
