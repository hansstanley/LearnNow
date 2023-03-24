import {useNavigation} from '@react-navigation/native';
import {Badge, Heading, Pressable, Stack, Text} from 'native-base';
import {ProgressStore} from '../../features/progress';
import {ChapterScreenProps} from '../../types/navigation';
import {Section} from '../../types/section';

export interface SectionItemProps {
  section: Section;
}

export default function SectionItem({section}: SectionItemProps) {
  const navigation = useNavigation<ChapterScreenProps['navigation']>();
  const progresses = ProgressStore.useStoreState(
    state => state.progress.progresses,
  );

  const progress = progresses.find(p => p.sectionId === section.pk);

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
          {progress?.isCompleted ? (
            <Badge rounded="md" colorScheme="primary" alignSelf="flex-start">
              COMPLETED
            </Badge>
          ) : null}
        </Stack>
      )}
    </Pressable>
  );
}
