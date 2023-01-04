import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './styles';

export function Button({ ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} {...rest}>
      <MaterialIcons name="add" size={26} color="#DBB13D" />
    </TouchableOpacity>
  );
}
