import {Text, View} from 'native-base';
import SectionList from '../components/section/SectionList';
import {ChapterScreenProps} from '../types/navigation';

export default function ChapterScreen({route}: ChapterScreenProps) {
  const {chapter} = route.params;

  return (
    <View>
      <Text _light={{color: 'primary.800'}} _dark={{color: 'primary.200'}}>
        {chapter.description}
      </Text>
      <SectionList />
    </View>
  );
}
