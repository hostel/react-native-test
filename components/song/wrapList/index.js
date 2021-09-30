import React, { useState, useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { Searchbar, ActivityIndicator, Colors } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import { fetchSongsThunk } from '../actions';
import { getItems, getIsLoading } from '../selectors';
import { useDebounce } from '../../../hooks/useDebounce';
import { SongItem } from '../item';

export const WrapList = () => {
  const [nameSong, changeName] = useState('');
  const debouncedSearch = useDebounce(nameSong, 500);
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector((state) => ({
    items: getItems(state),
    isLoading: getIsLoading(state),
  }));

  const onChangeText = (value) => {
    changeName(value);
  };

  useEffect(() => {
    if (debouncedSearch) {
      dispatch(
        fetchSongsThunk({
          limit: 20,
          offset: 0,
          term: debouncedSearch,
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
      {isLoading ? (
        <View>
          <ActivityIndicator
            animating={true}
            size="large"
            color={Colors.red800}
          />
        </View>
      ) : (
        <ScrollView>
          {items.map((item) => (
            <SongItem
              key={`${item.artistId}_${item.collectionId}_${item.trackId}`}
              trackData={item}
            />
          ))}
        </ScrollView>
      )}
    </React.Fragment>
  );
};
