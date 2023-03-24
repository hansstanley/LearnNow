import {Button, Divider, Heading, Stack, useToast} from 'native-base';
import {UsernameInput} from '../components/form';
import {ToastAlert} from '../components/toast';
import {useStoreActions, useStoreState} from '../features/auth';

export default function ProfileScreen() {
  const toast = useToast();
  const username = useStoreState(state => state.auth.username);
  const setToken = useStoreActions(actions => actions.setToken);

  const handleLogout = () => {
    setToken({});
    toast.show({render: () => <ToastAlert status="info" message="Goodbye!" />});
  };

  return (
    <Stack space={5} p={5}>
      <Heading size="3xl" my={5}>
        Profile
      </Heading>
      <UsernameInput value={username || ''} disabled />
      <Divider />
      <Button variant="outline" onPress={handleLogout} rounded="xl">
        Logout
      </Button>
    </Stack>
  );
}
