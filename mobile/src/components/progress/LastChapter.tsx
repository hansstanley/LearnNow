import {useNavigation} from '@react-navigation/native';
import {AxiosError} from 'axios';
import {Heading, Pressable, Stack, Text} from 'native-base';
import {useEffect, useState} from 'react';
import {getChapter, getSection} from '../../services/api';
import {Chapter} from '../../types/chapter';
import {HomeScreenProps} from '../../types/navigation';
import {Section} from '../../types/section';
import {LAST_POSITION} from '../../utils/sample';

export default function LastChapter() {
  const navigation = useNavigation<HomeScreenProps['navigation']>();
  const [chapter, setChapter] = useState<Chapter>();
  const [section, setSection] = useState<Section>();

  useEffect(() => {
    getChapter(LAST_POSITION.chapterId).then(c => setChapter(c));
    getSection(LAST_POSITION.chapterId, LAST_POSITION.sectionId)
      .then(s => setSection(s))
      .catch(err => {
        console.error(err);
      });
  }, []);

  const handlePress = () => {
    if (section) {
      navigation.navigate('Section', {section});
    }
  };

  return (
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
  );
}
