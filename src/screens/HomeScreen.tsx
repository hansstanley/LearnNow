import {Card, View} from 'react-native-ui-lib';

export default function HomeScreen() {
  return (
    <View>
      <Card>
        <Card.Section
          content={[{text: 'Card content here', text10: true, grey10: true}]}
          contentStyle={{alignItems: 'center'}}
        />
      </Card>
    </View>
  );
}
