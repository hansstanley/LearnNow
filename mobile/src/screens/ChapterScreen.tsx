import {Progress, ScrollView, Stack, Text, View} from 'native-base';
import {useEffect, useState} from 'react';
import {SectionList} from '../components/section';
import {ProgressStore} from '../features/progress';
import {getSections} from '../services/api';
import {ChapterScreenProps} from '../types/navigation';
import {Section} from '../types/section';

export default function ChapterScreen({route}: ChapterScreenProps) {
  const {chapter} = route.params;
  const progresses = ProgressStore.useStoreState(
    state => state.progress.progresses,
  );
  const [sections, setSections] = useState<Section[]>([]);

  const completedSectionIds = progresses
    .filter(p => p.isCompleted)
    .map(p => p.sectionId);
  const completedCount = sections.filter(s =>
    completedSectionIds.includes(s.pk),
  ).length;

  useEffect(() => {
    getSections(chapter.pk)
      .then(s => setSections(s))
      .catch(err => console.error(err));
  }, [chapter]);

  return (
    <View>
      <ScrollView>
        <Stack space={5} p={5}>
          <Text _light={{color: 'primary.800'}} _dark={{color: 'primary.200'}}>
            {chapter.fields.description}
          </Text>
          <Stack space={2} p={4} rounded="2xl" bg="light.50" shadow={2}>
            <Text>
              {completedCount} of {sections.length} sections read
            </Text>
            <Progress
              value={
                sections.length && (completedCount * 100) / sections.length
              }
            />
          </Stack>
          <SectionList sections={sections} />
        </Stack>
      </ScrollView>
    </View>
  );
}
