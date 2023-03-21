import {ActionBar, Card, TextArea} from 'react-native-ui-lib';

export default function NavigationBar() {
  return (
    <ActionBar
      centered
      flex
      bottom
      actions={[
        {label: 'Home', onPress: () => console.log('delete')},
        {label: 'Profile', onPress: () => {}},
      ]}
    />
  );
}
