import { Text, View, TextInput } from 'react-native';

import { styles } from './styles';
import { Loading } from '../Loading';

export function Home() {
  return(
    <View style={styles.container}>
      <Text style={styles.nameApp}>App name</Text>
      <Text style={styles.description}>description here</Text>
		
      <TextInput 
        style={styles.input} 
        placeholder='test input'
        placeholderTextColor="#6B6B6B"
      />
			<Loading />
    </View>
  )
}