import {Alert, Text} from 'native-base';
import {InterfaceAlertProps} from 'native-base/lib/typescript/components/composites/Alert/types';

export interface ToastAlertProps extends InterfaceAlertProps {
  message: string;
}

export default function ToastAlert({message, ...others}: ToastAlertProps) {
  return (
    <Alert {...others} variant="top-accent" rounded="xl">
      <Text>{message}</Text>
    </Alert>
  );
}
