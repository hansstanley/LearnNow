import {FormControl, Input} from 'native-base';

export interface PasswordInputProps {
  value: string;
  onChange?: (value: string) => void;
  label?: string;
  disabled?: boolean;
}

export default function PasswordInput({
  value,
  onChange,
  label = 'Password',
  disabled = false,
}: PasswordInputProps) {
  return (
    <FormControl isDisabled={disabled}>
      <FormControl.Label ml={2}>{label}</FormControl.Label>
      <Input
        placeholder="Password"
        type="password"
        value={value}
        onChangeText={onChange}
      />
    </FormControl>
  );
}
