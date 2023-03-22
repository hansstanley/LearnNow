import {Text, View} from 'react-native-ui-lib';
import {ChapterList} from '../components/chapter';

export default function HomeScreen() {
  return (
    <View flexG padding-20>
      <View paddingB-10>
        <Text text10>Chapters</Text>
      </View>
      <ChapterList />
    </View>
  );
}
