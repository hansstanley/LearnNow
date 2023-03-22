import {FlatList, Flex, Stack} from 'native-base';
import {CHAPTERS} from '../../utils/sample';
import ChapterItem from './ChapterItem';

export default function ChapterList() {
  return (
    <Stack space={2}>
      {CHAPTERS.map(c => (
        <ChapterItem key={c.id} chapter={c} />
      ))}
    </Stack>
  );
}
