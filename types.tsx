export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Premium: undefined;
  Your Library: undefined;
  
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type Album ={
  id: String;
  imageUri: String;
  artistsHeadline: String;
}

export type Song ={
  id: String,
  imageUri: String,
  title: String,
  artist: String
}
