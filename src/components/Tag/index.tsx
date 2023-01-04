import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

type Props = {
  title: string;
  onRemove: () => void;
};

export function Tag({ title, onRemove }: Props) {
  return (
    <TouchableOpacity  style={styles.container} onPress={onRemove}>
      <Text style={styles.title}>#{title}</Text>
    </TouchableOpacity>
  );
}
