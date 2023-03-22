import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';
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
  const navigation = useNavigation();

  const handlePress = (item: string) => {
    navigation.navigate('Chapter');
  };

  return (
    <Card>
      <View paddingH-20>
        <FlatList
          data={ITEMS}
          renderItem={({index, item}) => (
            <View key={index}>
              <ListItem onPress={handlePress}>
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
