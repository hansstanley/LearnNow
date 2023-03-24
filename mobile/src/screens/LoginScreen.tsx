import {Button, Center, Heading, Input, Text, VStack} from 'native-base';
import {useState} from 'react';
import {useStoreActions} from '../features/auth/auth';
import {login} from '../services/api';

export default function LoginScreen() {
  const setToken = useStoreActions(actions => actions.setToken);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (text: string) => setUsername(text);

  const handlePasswordChange = (text: string) => setPassword(text);

  const handleLogin = () => {
    login(username, password)
      .then(res => {
        setToken({userToken: res.config.data});
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <Center bg="primary.100" flex={1}>
      <VStack space={5} alignItems="center">
        <Heading size="3xl">LearnNow</Heading>
        <VStack
          space={5}
          alignItems="flex-start"
          rounded="xl"
          bg="light.50"
          shadow={2}
          padding={5}
          width="80%">
          <Input
            placeholder="Username"
            value={username}
            onChangeText={handleUsernameChange}
          />
          <Input
            placeholder="Password"
            value={password}
            onChangeText={handlePasswordChange}
          />
          <Button onPress={handleLogin}>Login</Button>
        </VStack>
      </VStack>
    </Center>
  );
}
