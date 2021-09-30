import React from 'react';
import { Title, Card, Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { AddToFavorite } from '../../favorites/addToFavorite';
import { RemoveFromFavorite } from '../../favorites/removeFromFavorite';
import { SCREEN_NAMES } from '../../../constants';

export const SongItem = ({ trackData }) => {
  const { navigate } = useNavigation();

  const onPress = () => {
    navigate(SCREEN_NAMES.SONG_DETAULS, {
      artistId: trackData.artistId,
      collectionId: trackData.collectionId,
      trackId: trackData.trackId,
    });
  };

  return (
    <Card style={{ marginVertical: 5 }}>
      <Card.Title
        title={<Title onPress={onPress}>{trackData.trackName}</Title>}
        subtitle={trackData.artistName}
        style={{ paddingVertical: 10, paddingHorizontal: 15 }}
        leftStyle={{ marginRight: 25 }}
        left={() => (
          <Avatar.Image
            size={50}
            source={{
              uri: trackData.artworkUrl100.replace('100x100', '600x600'),
            }}
          />
        )}
        right={() =>
          trackData.isInFavorites ? (
            <RemoveFromFavorite item={trackData} />
          ) : (
            <AddToFavorite item={trackData} />
          )
        }
      />
    </Card>
  );
};
