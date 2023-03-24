import {Image, ScrollView, Stack, Text} from 'native-base';
import {useCallback, useEffect, useRef, useState} from 'react';
import {ScrollView as ReactScrollView} from 'react-native';
import {ProgressStore} from '../features/progress';
import {SectionScreenProps} from '../types/navigation';

export default function SectionScreen({route}: SectionScreenProps) {
  const section = route.params.section;
  const progressMap = ProgressStore.useStoreState(
    state => state.progress.progresses,
  );
  const setProgress = ProgressStore.useStoreActions(
    actions => actions.setProgress,
  );
  const setLastSection = ProgressStore.useStoreActions(
    actions => actions.setLastSection,
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
    setLastSection(section);
  }, [section]);

  useEffect(() => {
    setProgress({
      chapterId: section.fields.chapter,
      sectionId: section.pk,
      completion: scrollProgress || 0,
    });
  }, [section, scrollProgress]);

  const fillContent = useCallback(() => {
    const regex = /\[.*\]/;
    const chunks = section.fields.content.split(/\n/).filter(c => !!c.trim());

    const content = [];
    let key = 0;
    for (let chunk of chunks) {
      if (regex.test(chunk)) {
        const uri = chunk.substring(chunk.indexOf('[') + 1, chunk.indexOf(']'));
        content.push(
          <Image
            key={key}
            source={{uri}}
            alt={uri}
            rounded="2xl"
            resizeMode="cover"
            width="100%"
            height={200}
          />,
        );
      } else {
        content.push(<Text key={key}>{chunk}</Text>);
      }
      key += 1;
    }
    return content;
  }, [section]);

  return (
    <ScrollView
      ref={scrollRef}
      onMomentumScrollEnd={event =>
        setScrollProgress(event.nativeEvent.contentOffset.y)
      }>
      <Stack space={5} p={5}>
        <Text _light={{color: 'primary.800'}} _dark={{color: 'primary.200'}}>
          {section.fields.summary}
        </Text>
        {fillContent()}
      </Stack>
    </ScrollView>
  );
}
