import {FormControl, Input} from 'native-base';

export interface UsernameInputProps {
  value: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export default function UsernameInput({
  value,
  onChange,
  disabled = false,
}: UsernameInputProps) {
  return (
    <FormControl isDisabled={disabled}>
      <FormControl.Label ml={2}>Username</FormControl.Label>
      <Input
        isReadOnly={disabled}
        placeholder="Username"
        value={value}
        onChangeText={onChange}
      />
    </FormControl>
  );
}
