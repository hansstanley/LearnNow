import {Button, Center, Input, Text, VStack} from 'native-base';

export default function LoginScreen() {
  return (
    <Center bg="primary.100" flex={1}>
      <VStack space={5} alignItems="center">
        <Text fontSize="6xl" bold>
          LearnNow
        </Text>
        <VStack
          space={5}
          alignItems="flex-start"
          rounded="xl"
          bg="light.50"
          borderWidth={1}
          borderColor="primary.900"
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
