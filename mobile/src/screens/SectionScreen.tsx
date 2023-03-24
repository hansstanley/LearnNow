import {ScrollView, Stack, Text} from 'native-base';
import {useEffect, useState} from 'react';
import {useStoreState} from '../features/auth';
import {ProgressStore} from '../features/progress';
import {storeLastProgress} from '../services/progress';
import {SectionScreenProps} from '../types/navigation';

export default function SectionScreen({route}: SectionScreenProps) {
  const section = route.params.section;
  const username = useStoreState(state => state.auth.username);
  const lastProgress = ProgressStore.useStoreState(
    state => state.progress.lastProgress,
  );
  const setLastProgress = ProgressStore.useStoreActions(
    actions => actions.setLastProgress,
  );
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setLastProgress({
      lastProgress: {
        chapterId: section.fields.chapter,
        sectionId: section.pk,
        completion: scrollProgress,
      },
    });
  }, [scrollProgress]);

  useEffect(() => {
    console.log(username, lastProgress);
    if (username && lastProgress) {
      storeLastProgress(username, lastProgress);
    }
  }, [username, lastProgress]);

  return (
    <ScrollView
      onScroll={event => setScrollProgress(event.nativeEvent.contentOffset.y)}>
      <Stack space={2} p={5}>
        <Text _light={{color: 'primary.800'}} _dark={{color: 'primary.200'}}>
          {section.fields.summary}
        </Text>
        <Text>{section.fields.content}</Text>
      </Stack>
    </ScrollView>
  );
}
