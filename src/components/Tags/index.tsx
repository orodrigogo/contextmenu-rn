import { View } from 'react-native';

import { Tag } from '../Tag';

import { styles } from './styles';

type Props = {
  data: string[];
  onRemove: (tag: string) => void;
};

export function Tags({ data, onRemove }: Props) {
  return (
    <View style={styles.container}>
      {data.map(tag => (
        <Tag key={tag} title={tag} onRemove={() => onRemove(tag)} />
      ))}
    </View>
  );
}
