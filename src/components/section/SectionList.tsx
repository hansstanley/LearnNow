import {FlatList} from 'native-base';
import {Section} from '../../types/section';
import SectionItem from './SectionItem';

const SECTIONS: Section[] = [
  {
    id: 0,
    title: 'Section 1',
    summary: 'This is the first section',
    isCompleted: false,
  },
  {
    id: 1,
    title: 'Section 2',
    summary: 'This is the first section',
    isCompleted: false,
  },
  {
    id: 2,
    title: 'Section 3',
    summary: 'This is the first section',
    isCompleted: false,
  },
  {
    id: 3,
    title: 'Section 4',
    summary: 'This is the first section',
    isCompleted: false,
  },
  {
    id: 4,
    title: 'Section 5',
    summary: 'This is the first section',
    isCompleted: false,
  },
  {
    id: 5,
    title: 'Section 6',
    summary: 'This is the first section',
    isCompleted: false,
  },
  {
    id: 6,
    title: 'Section 7',
    summary: 'This is the first section',
    isCompleted: false,
  },
  {
    id: 7,
    title: 'Section 8',
    summary: 'This is the first section',
    isCompleted: false,
  },
];

export default function SectionList() {
  return (
    <FlatList
      data={SECTIONS}
      renderItem={({item}) => <SectionItem key={item.id} section={item} />}
    />
  );
}
