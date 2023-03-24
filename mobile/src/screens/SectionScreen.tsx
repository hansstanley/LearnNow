import {ScrollView, Stack, Text} from 'native-base';
import {useEffect, useRef, useState} from 'react';
import {ScrollView as ReactScrollView} from 'react-native';
import {useStoreState} from '../features/auth';
import {ProgressStore} from '../features/progress';
import {storeLastProgress} from '../services/progress';
import {SectionScreenProps} from '../types/navigation';

export default function SectionScreen({route}: SectionScreenProps) {
  const section = route.params.section;
  const progressMap = ProgressStore.useStoreState(
    state => state.progress.progresses,
  );
  const setProgress = ProgressStore.useStoreActions(
    actions => actions.setProgress,
  );
  const currentProgress = progressMap.find(p => p.sectionId === section.pk);
  const [scrollProgress, setScrollProgress] = useState(
    currentProgress?.completion,
  );
  const scrollRef = useRef<ReactScrollView>();

  useEffect(() => {
    scrollRef.current?.scrollTo({y: currentProgress?.completion || 0});
  }, [scrollRef]);

  useEffect(() => {
    setProgress({
      chapterId: section.fields.chapter,
      sectionId: section.pk,
      completion: scrollProgress || 0,
    });
  }, [section, scrollProgress]);

  return (
    <ScrollView
      ref={scrollRef}
      onMomentumScrollEnd={event =>
        setScrollProgress(event.nativeEvent.contentOffset.y)
      }>
      <Stack space={2} p={5}>
        <Text _light={{color: 'primary.800'}} _dark={{color: 'primary.200'}}>
          {section.fields.summary}
        </Text>
        <Text>{section.fields.content}</Text>
      </Stack>
    </ScrollView>
  );
}
