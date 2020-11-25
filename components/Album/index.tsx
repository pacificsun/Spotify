import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

export type AlbumProps = {
  album: {
    id: String;
    imageUri: String;
    artistsHeadline: String;
  };
};

const Album = (props: AlbumProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: props.album.imageUri }} style={styles.image} />
      <Text style={styles.text}>{props.album.artistsHeadline}</Text>
    </View>
  );
};

export default Album;
