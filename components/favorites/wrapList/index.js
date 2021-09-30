import React from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import { getFavorites } from '../selectors';
import { SongItem } from '../../song/item';

export const WrapList = () => {
  const items = useSelector(getFavorites);
  return (
    <React.Fragment>
      <ScrollView>
        {items.map((item) => (
          <SongItem
            key={`${item.artistId}_${item.collectionId}_${item.trackId}`}
            trackData={item}
          />
        ))}
      </ScrollView>
    </React.Fragment>
  );
};
