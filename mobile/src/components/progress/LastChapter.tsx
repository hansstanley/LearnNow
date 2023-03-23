import {useNavigation} from '@react-navigation/native';
import {Heading, Pressable, Stack, Text} from 'native-base';
import {useEffect, useState} from 'react';
import {getChapter} from '../../services/api';
import {Chapter} from '../../types/chapter';
import {HomeScreenProps} from '../../types/navigation';
import {getSection, LAST_POSITION} from '../../utils/sample';

export default function LastChapter() {
  const navigation = useNavigation<HomeScreenProps['navigation']>();
  const [chapter, setChapter] = useState<Chapter>();
  const section = getSection(LAST_POSITION.sectionId);

  useEffect(() => {
    getChapter(1).then(c => setChapter(c));
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
            {section?.title}
          </Text>
        </Stack>
      )}
    </Pressable>
  );
}
