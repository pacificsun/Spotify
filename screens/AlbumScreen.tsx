import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

import albumDetails from '../data/albumDetails';

import SongListItem from '../components/SongListItem';

const AlbumScreen = () => {
  const route = useRoute();

  useEffect(() => {
    console.log(route);
  }, []);

  return (
    <View>
      <Text style={{ color: 'white' }}>Hello from album screen</Text>
      <SongListItem song={albumDetails.songs[0]} />
    </View>
  );
};

export default AlbumScreen;
