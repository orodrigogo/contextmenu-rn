import { useState } from 'react';
import { Text, View } from 'react-native';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Tags } from '../../components/Tags';

import { styles } from './styles';

export function Home() {
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState('');

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag('');
  }

  function handleRemoveTag(tagDeleted: string) {
    setTags(prevState => prevState.filter(tag => tag !== tagDeleted));
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Input placeholder="Nova tag" onChangeText={setNewTag} value={newTag} />
        <Button onPress={handleAddTag} />
      </View>

      <Text style={styles.title}>Tags</Text>

      <Tags data={tags} onRemove={handleRemoveTag} />
    </View>
  );
}
