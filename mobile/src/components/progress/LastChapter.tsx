import {useNavigation} from '@react-navigation/native';
import {Heading, HStack, Pressable, Stack, Text} from 'native-base';
import {useEffect, useState} from 'react';
import {useStoreState} from '../../features/auth';
import {ProgressStore} from '../../features/progress';
import {getChapter, getSection} from '../../services/api';
import {getLastProgress} from '../../services/progress';
import {Chapter} from '../../types/chapter';
import {HomeScreenProps} from '../../types/navigation';
import {Section} from '../../types/section';

export default function LastChapter() {
  const navigation = useNavigation<HomeScreenProps['navigation']>();
  const username = useStoreState(state => state.auth.username);
  const lastProgress = ProgressStore.useStoreState(
    state => state.progress.lastProgress,
  );
  const setLastProgress = ProgressStore.useStoreActions(
    actions => actions.setLastProgress,
  );
  const [chapter, setChapter] = useState<Chapter>();
  const [section, setSection] = useState<Section>();

  useEffect(() => {
    if (!username) {
      return;
    }
    getLastProgress(username).then(p =>
      setLastProgress({lastProgress: p || undefined}),
    );
  }, [username]);

  useEffect(() => {
    if (!lastProgress) {
      return;
    }
    getChapter(lastProgress.chapterId).then(c => setChapter(c));
    getSection(lastProgress.chapterId, lastProgress.sectionId)
      .then(s => setSection(s))
      .catch(err => {
        console.error(err);
      });
  }, [lastProgress]);

  const handlePress = () => {
    if (section) {
      navigation.navigate('Section', {section});
    }
  };

  return lastProgress ? (
    <Pressable p={1} onPress={handlePress}>
      {({isPressed}) => (
        <Stack
          space={2}
          p={4}
          rounded="2xl"
          shadow={isPressed ? 1 : 2}
          opacity={isPressed ? 0.9 : 1}
          bg="light.50">
          <Text fontSize="xs" italic>
            Continue where you left off
          </Text>
          <Heading size="md">{chapter?.fields.title}</Heading>
          <HStack space={2}>
            <Text
              _light={{color: 'primary.800'}}
              _dark={{color: 'primary.200'}}>
              {section?.fields.title}
            </Text>
            <Text>{lastProgress.completion} %</Text>
          </HStack>
        </Stack>
      )}
    </Pressable>
  ) : null;
}
