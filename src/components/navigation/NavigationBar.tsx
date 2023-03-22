import {ActionBar, Card, TextArea, View} from 'react-native-ui-lib';

export default function NavigationBar() {
  return (
    <View flexS>
      <ActionBar
        centred
        actions={[
          {label: 'Learn', onPress: () => console.log('delete')},
          {label: 'Profile', onPress: () => {}},
        ]}
      />
    </View>
  );
}
