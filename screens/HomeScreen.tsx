import * as React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import AlbumCategory from '../components/AlbumCategory';
import albumCategories from '../data/albumCategories';
import AlbumCategories from '../data/albumCategories';

export default function HomeScreen() {
  return (
    <View>
      <FlatList
        data={albumCategories}
        renderItem={({ item }) => (
          <AlbumCategory title={item.title} albums={item.albums} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
