import {useNavigation} from '@react-navigation/native';
import {Heading, Pressable, Stack, Text} from 'native-base';
import {Chapter} from '../../types/chapter';
import {HomeScreenProps} from '../../types/navigation';

export interface ChapterItemProps {
  chapter: Chapter;
}

export default function ChapterItem({chapter}: ChapterItemProps) {
  const navigation = useNavigation<HomeScreenProps['navigation']>();

  const handlePress = () => {
    navigation.navigate('Chapter', {chapter});
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
          <Heading size="md">{chapter.fields.title}</Heading>
          <Text _light={{color: 'primary.800'}} _dark={{color: 'primary.200'}}>
            {chapter.fields.description}
          </Text>
        </Stack>
      )}
    </Pressable>
  );
}
