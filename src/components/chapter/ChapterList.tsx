import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {Card, ListItem, Text, View} from 'react-native-ui-lib';

const ITEMS = [
  'One',
  'Two',
  'Three',
  'One',
  'Two',
  'Three',
  'One',
  'Two',
  'Three',
  'One',
  'Two',
  'Three',
  'One',
  'Two',
  'Three',
  'One',
  'Two',
  'Three',
];

export default function ChapterList() {
  return (
    <Card>
      <View paddingH-20>
        <FlatList
          data={ITEMS}
          renderItem={({index, item}) => (
            <View key={index}>
              <ListItem onPress={() => {}}>
                <ListItem.Part>
                  <Text text50>{item}</Text>
                </ListItem.Part>
              </ListItem>
            </View>
          )}
        />
      </View>
    </Card>
  );
}
