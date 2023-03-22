import {Box, Divider, Heading, ScrollView, Stack} from 'native-base';
import {ChapterList} from '../components/chapter';
import {LastChapter} from '../components/progress';

export default function HomeScreen() {
  return (
    <ScrollView>
      <Stack space={2} p={5}>
        <Heading size="3xl" my={5}>
          Chapters
        </Heading>
        <LastChapter />
        <Divider />
        <ChapterList />
      </Stack>
    </ScrollView>
  );
}
