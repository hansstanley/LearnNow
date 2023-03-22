import {FlatList, Flex} from 'native-base';
import {Chapter} from '../../types/chapter';
import ChapterItem from './ChapterItem';

const CHAPTERS: Chapter[] = [
  {id: 0, title: 'Chapter 1', description: 'This is the first chapter.'},
  {id: 1, title: 'Chapter 2', description: 'This is the second chapter.'},
  {id: 2, title: 'Chapter 3', description: 'This is the third chapter.'},
  {id: 3, title: 'Chapter 4', description: 'This is the fourth chapter.'},
  {id: 4, title: 'Chapter 5', description: 'This is the fifth chapter.'},
  {id: 5, title: 'Chapter 6', description: 'This is the sixth chapter.'},
  {id: 6, title: 'Chapter 7', description: 'This is the seventh chapter.'},
  {id: 7, title: 'Chapter 8', description: 'This is the eighth chapter.'},
];

export default function ChapterList() {
  return (
    <Flex>
      <FlatList
        data={CHAPTERS}
        renderItem={({item}) => <ChapterItem key={item.id} chapter={item} />}
        keyExtractor={item => `${item.id}`}
      />
    </Flex>
  );
}
