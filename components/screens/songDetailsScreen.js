import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Title,
  Card,
  Subheading,
  Headline,
  Caption,
  Appbar,
} from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { GoToFavoritesButton } from '../favorites/goToFavoritesButton';
import { AddToFavorite } from '../favorites/addToFavorite';
import { RemoveFromFavorite } from '../favorites/removeFromFavorite';
import { getSelectedSong } from '../song/selectors';

export const SongDetailsScreen = ({ route: { params: songData } }) => {
  const { goBack } = useNavigation();
  const song = useSelector((state) => getSelectedSong(state, songData));

  const year = new Date(song.releaseDate).getUTCFullYear();

  return (
    <>
      <Appbar.Header dark={false} style={{ backgroundColor: 'darkturquoise' }}>
        <TouchableOpacity onPress={goBack}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Appbar.Content title="Details" />
        <GoToFavoritesButton />
      </Appbar.Header>
      <Card style={{ marginVertical: 5 }}>
        <Card.Cover
          source={{ uri: song.artworkUrl100.replace('100x100', '600x600') }}
        />
        <Card.Content>
          <Title>{song.artistName}</Title>
          <Headline>{song.trackName}</Headline>
          <Subheading>{song.collectionName}</Subheading>
          <Caption>
            {song.primaryGenreName} ({year})
          </Caption>
        </Card.Content>
        <Card.Actions>
          {song.isInFavorites ? (
            <RemoveFromFavorite item={song} />
          ) : (
            <AddToFavorite item={song} />
          )}
        </Card.Actions>
      </Card>
    </>
  );
};
