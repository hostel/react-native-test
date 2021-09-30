import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import { fetchSongsThunk } from '../actions';
import { getItems } from '../selectors';
import { useDebounce } from '../../../hooks/useDebounce';
import { SongItem } from '../item';

export const WrapList = () => {
  const [nameSong, changeName] = useState('');
  const debouncedSearch = useDebounce(nameSong, 500);
  const dispatch = useDispatch();
  const items = useSelector(getItems);

  const onChangeText = (value) => {
    changeName(value);
  };

  useEffect(() => {
    if (debouncedSearch) {
      dispatch(
        fetchSongsThunk({
          limit: 0,
          offset: 0,
          term: nameSong,
        })
      );
    }
  }, [debouncedSearch]);

  return (
    <React.Fragment>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeText}
        value={nameSong}
        style={{ marginBottom: 20 }}
      />
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
