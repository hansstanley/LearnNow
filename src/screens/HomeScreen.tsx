import {Box, Heading, ScrollView} from 'native-base';
import {ChapterList} from '../components/chapter';

export default function HomeScreen() {
  return (
    <ScrollView>
      <Box p={5}>
        <Heading size="3xl" my={5}>
          Chapters
        </Heading>
        <ChapterList />
      </Box>
    </ScrollView>
  );
}
