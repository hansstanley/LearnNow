import {
  Button,
  Divider,
  Heading,
  ScrollView,
  Stack,
  useToast,
} from 'native-base';
import {PasswordInput, UsernameInput} from '../components/form';
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
    <ScrollView bg="white">
      <Stack space={5} p={5}>
        <Heading size="3xl" my={5}>
          Profile
        </Heading>
        <Heading>Info</Heading>
        <UsernameInput value={username || ''} disabled />
        <Divider />
        <Heading>Change password</Heading>
        <PasswordInput value="" />
        <PasswordInput value="" label="Confirm password" />
        <Divider />
        <Button variant="outline" onPress={handleLogout} rounded="xl">
          Logout
        </Button>
      </Stack>
    </ScrollView>
  );
}
