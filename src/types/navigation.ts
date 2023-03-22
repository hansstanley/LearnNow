import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Chapter} from './chapter';
import {Section} from './section';

export type RootTabParamList = {
  Learn: undefined;
  Profile: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  Chapter: {chapter: Chapter};
  Section: {section: Section};
};

export type HomeScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  'Home'
>;

export type ChapterScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  'Chapter'
>;

export type SectionScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  'Section'
>;
