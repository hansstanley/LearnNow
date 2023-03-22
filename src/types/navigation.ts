import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {Chapter} from './chapter';
import {Section} from './section';

export type RootTabParamList = {
  Learn: undefined;
  Profile: undefined;
};

export type HomeStackParamList = {
  Chapters: undefined;
  Chapter: {chapter: Chapter};
  Section: {section: Section};
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'Chapters'
>;

export type ChapterScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  'Chapter'
>;

export type SectionScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  'Section'
>;
