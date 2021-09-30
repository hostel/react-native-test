import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SongListScreen } from './components/screens/songlist';
import { FavoritesScreen } from './components/screens/favoritesScreen';
import { SongDetailsScreen } from './components/screens/songDetailsScreen';
import { store } from './store';
import { SCREEN_NAMES } from './constants';

const Stack = createStackNavigator();

const App = () => (
  <StoreProvider store={store}>
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={SCREEN_NAMES.SONG_LIST}
          headerMode="none"
        >
          <Stack.Screen
            name={SCREEN_NAMES.SONG_LIST}
            component={SongListScreen}
          />
          <Stack.Screen
            name={SCREEN_NAMES.FAVORITES}
            component={FavoritesScreen}
          />
          <Stack.Screen
            name={SCREEN_NAMES.SONG_DETAULS}
            component={SongDetailsScreen}
            getId={(trackData) => trackData}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  </StoreProvider>
);

export default App;
