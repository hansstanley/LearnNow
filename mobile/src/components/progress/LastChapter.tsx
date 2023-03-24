import {useNavigation} from '@react-navigation/native';
import {Heading, Pressable, Stack, Text} from 'native-base';
import {useEffect, useState} from 'react';
import {useStoreState} from '../../features/store';
import {ProgressStore} from '../../features/progress';
import {getChapter, getSection} from '../../services/api';
import {getLastSection, storeLastSection} from '../../services/progress';
import {Chapter} from '../../types/chapter';
import {HomeScreenProps} from '../../types/navigation';
import {Section} from '../../types/section';

export default function LastRead() {
  const navigation = useNavigation<HomeScreenProps['navigation']>();
  const username = useStoreState(state => state.auth.username);
  const lastSection = ProgressStore.useStoreState(
    state => state.progress.lastSection,
  );
  const setLastSection = ProgressStore.useStoreActions(
    actions => actions.setLastSection,
  );
  const [chapter, setChapter] = useState<Chapter>();
  const [section, setSection] = useState<Section>();

  useEffect(() => {
    if (!username) {
      return;
    }
    getLastSection(username).then(s => s && setLastSection(s));
  }, [username]);

  useEffect(() => {
    if (!lastSection) {
      return;
    }
    getChapter(lastSection.fields.chapter)
      .then(c => setChapter(c))
      .catch(err => {
        console.error(err);
      });
    getSection(lastSection.fields.chapter, lastSection.pk)
      .then(s => setSection(s))
      .catch(err => {
        console.error(err);
      });

    if (!username) {
      return;
    }
    storeLastSection(username, lastSection);
  }, [lastSection]);

  const handlePress = () => {
    if (section) {
      navigation.navigate('Section', {section});
    }
  };

  return lastSection ? (
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
          <Text _light={{color: 'primary.800'}} _dark={{color: 'primary.200'}}>
            {section?.fields.title}
          </Text>
        </Stack>
      )}
    </Pressable>
  ) : null;
}
