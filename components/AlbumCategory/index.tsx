import React from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './styles';

import { AlbumType } from '../../types';
import Album from '../Album';

export type AlbumCategoryProps = {
  title: String;
  albums: [AlbumType];
};

const AlbumCategory = (props: AlbumCategoryProps) => {
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
      <FlatList
        data={props.albums}
        renderItem={({ item }) => <Album album={item} />}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </View>
  );
};

export default AlbumCategory;
