import {FlatList} from 'react-native-gesture-handler';
import {
  Card,
  GridList,
  GridListItem,
  ListItem,
  Text,
  View,
} from 'react-native-ui-lib';
import {ChapterList} from '../components/chapter';

export default function HomeScreen() {
  return (
    <View flexG padding-20>
      <View paddingV-20>
        <Text text10>Chapters</Text>
      </View>
      <ChapterList />
    </View>
  );
}
