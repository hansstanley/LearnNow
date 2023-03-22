import {Button, Center, Heading, Input, Text, VStack} from 'native-base';

export default function LoginScreen() {
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
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button>Login</Button>
        </VStack>
      </VStack>
    </Center>
  );
}
