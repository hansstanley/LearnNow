import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootTabParamList = {
  Learn: undefined;
  Profile: undefined;
};

export type HomeStackParamList = {
  Chapters: undefined;
  Chapter: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'Chapter'
>;
