import React from 'react';
import { View, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';



export function Search({ placeholder, onChangeText, value }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
      <Ionicons name="search" size={24} color="gray" style={styles.icon} />
    </View>
  );
}
