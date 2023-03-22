import {Box, ScrollView, Text, View} from 'native-base';
import {SectionList} from '../components/section';
import {ChapterScreenProps} from '../types/navigation';

export default function ChapterScreen({route}: ChapterScreenProps) {
  const {chapter} = route.params;

  return (
    <View>
      <ScrollView>
        <Box p={5}>
          <Text
            mb={5}
            _light={{color: 'primary.800'}}
            _dark={{color: 'primary.200'}}>
            {chapter.description}
          </Text>
          <SectionList />
        </Box>
      </ScrollView>
    </View>
  );
}
