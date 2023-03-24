import {Button, Divider, Heading, Stack} from 'native-base';
import {UsernameInput} from '../components/form';
import {useStoreActions, useStoreState} from '../features/auth';

export default function ProfileScreen() {
  const username = useStoreState(state => state.auth.username);
  const setToken = useStoreActions(actions => actions.setToken);

  const handleLogout = () => {
    setToken({});
  };

  return (
    <Stack space={2} p={5}>
      <Heading size="3xl" my={5}>
        Profile
      </Heading>
      <UsernameInput value={username || ''} disabled />
      <Divider />
      <Button onPress={handleLogout}>Logout</Button>
    </Stack>
  );
}
