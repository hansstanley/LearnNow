import {
  Button,
  Center,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from 'native-base';
import {useState} from 'react';
import {useStoreActions} from '../features/auth';
import {login, register} from '../services/api';

export default function LoginScreen() {
  const setToken = useStoreActions(actions => actions.setToken);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [registerToggle, setRegisterToggle] = useState(false);

  const handleUsernameChange = (text: string) => setUsername(text);

  const handlePasswordChange = (text: string) => setPassword(text);

  const handlePasswordConfirmChange = (text: string) =>
    setPasswordConfirm(text);

  const handleLogin = () => {
    login(username, password)
      .then(res => {
        setToken({userToken: res.config.data});
      })
      .catch(err => {
        console.error(err);
      });
  };

  const handleRegister = () => {
    if (password !== passwordConfirm) {
      console.error('Passwords do not match');
      return;
    }
    register(username, password)
      .then(res => {
        setToken({userToken: res.config.data});
      })
      .catch(err => {
        console.error(err);
      });
  };

  const toggleRegister = () => {
    setRegisterToggle(!registerToggle);
  };

  return (
    <Center bg="primary.100" flex={1}>
      <VStack
        space={5}
        alignItems="flex-start"
        rounded="xl"
        bg="light.50"
        shadow={2}
        padding={5}
        width="80%">
        <Heading size="3xl">LearnNow</Heading>
        <Input
          placeholder="Username"
          value={username}
          onChangeText={handleUsernameChange}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChangeText={handlePasswordChange}
        />
        {registerToggle ? (
          <Input
            type="password"
            placeholder="Confirm password"
            value={passwordConfirm}
            onChangeText={handlePasswordConfirmChange}
          />
        ) : null}
        <HStack space={2}>
          <Button onPress={registerToggle ? handleRegister : handleLogin}>
            {registerToggle ? 'Register' : 'Login'}
          </Button>
          <Button variant="ghost" onPress={toggleRegister}>
            {registerToggle
              ? 'Already have an account?'
              : "Don't have an account?"}
          </Button>
        </HStack>
      </VStack>
    </Center>
  );
}
