import {useNavigation} from '@react-navigation/native';
import {Heading, Pressable, Stack, Text} from 'native-base';
import {Chapter} from '../../types/chapter';
import {HomeScreenNavigationProp} from '../../types/navigation';

export interface ChapterItemProps {
  chapter: Chapter;
}

export default function ChapterItem({chapter}: ChapterItemProps) {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handlePress = () => {
    navigation.navigate('Chapter', {chapter});
  };

  return (
    <Pressable onPress={handlePress}>
      {({isPressed}) => (
        <Stack
          space={2}
          p={4}
          mx={5}
          my={2}
          rounded="2xl"
          shadow={isPressed ? 1 : 2}
          opacity={isPressed ? 0.9 : 1}
          bg="light.50">
          <Heading size="md">{chapter.title}</Heading>
          <Text _light={{color: 'primary.800'}} _dark={{color: 'primary.200'}}>
            {chapter.description}
          </Text>
        </Stack>
      )}
    </Pressable>
  );
}
