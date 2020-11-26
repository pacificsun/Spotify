import React from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './styles';

import { Album } from '../../types';
import AlbumComponent from '../Album';

export type AlbumCategoryProps = {
  title: String;
  albums: [Album];
};

const AlbumCategory = (props: AlbumCategoryProps) => {
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
      <FlatList
        data={props.albums}
        renderItem={({ item }) => <AlbumComponent album={item} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};

export default AlbumCategory;
