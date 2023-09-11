import { View } from 'react-native';
import { Search } from '../Search'
import React, { useState } from 'react';

import { styles } from './styles';
import { Loading } from '../Loading';
import { ReservationScreen } from '../ReservationScreen';
import { Maps } from '../Maps';

export function Home({ navigation }) {
  const [searchText, setSearchText] = useState('');

  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };
  return(
      <View style={styles.container}>
        <Search  placeholder="Search"
        onChangeText={handleSearchTextChange}
        value={searchText}/>
        <Maps />
      </View>
  )
}