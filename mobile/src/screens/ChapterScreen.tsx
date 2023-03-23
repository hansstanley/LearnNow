import {Box, ScrollView, Text, View} from 'native-base';
import {useEffect, useState} from 'react';
import {SectionList} from '../components/section';
import {getSections} from '../services/api';
import {ChapterScreenProps} from '../types/navigation';
import {Section} from '../types/section';

export default function ChapterScreen({route}: ChapterScreenProps) {
  const {chapter} = route.params;
  const [sections, setSections] = useState<Section[]>([]);

  useEffect(() => {
    getSections(chapter.pk)
      .then(s => setSections(s))
      .catch(err => console.error(err));
  }, [chapter]);

  return (
    <View>
      <ScrollView>
        <Box p={5}>
          <Text
            mb={5}
            _light={{color: 'primary.800'}}
            _dark={{color: 'primary.200'}}>
            {chapter.fields.description}
          </Text>
          <SectionList sections={sections} />
        </Box>
      </ScrollView>
    </View>
  );
}
