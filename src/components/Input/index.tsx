import { TextInput, TextInputProps } from 'react-native';

import { styles } from './styles';

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      style={styles.container}
      placeholderTextColor="#A0A0A7"
      {...rest}
    />
  );
}
