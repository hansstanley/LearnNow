import {useNavigation} from '@react-navigation/native';
import {Heading, Pressable, Stack, Text} from 'native-base';
import {ChapterScreenProps} from '../../types/navigation';
import {Section} from '../../types/section';

export interface SectionItemProps {
  section: Section;
}

export default function SectionItem({section}: SectionItemProps) {
  const navigation = useNavigation<ChapterScreenProps['navigation']>();

  const handlePress = () => {
    navigation.navigate('Section', {section});
  };

  return (
    <Pressable onPress={handlePress} p={1}>
      {({isPressed}) => (
        <Stack
          space={2}
          p={4}
          rounded="2xl"
          shadow={isPressed ? 1 : 2}
          opacity={isPressed ? 0.9 : 1}
          bg="light.50">
          <Heading size="md">{section.fields.title}</Heading>
          <Text>{section.fields.summary}</Text>
        </Stack>
      )}
    </Pressable>
  );
}
