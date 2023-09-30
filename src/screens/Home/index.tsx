import React, { useState } from "react";
import { View } from "react-native";
import { Search } from "../Search";

import { Maps } from "../Maps";
import { styles } from "./styles";

export function Home({ navigation }) {
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };
  return (
    <View style={styles.container}>
      <Search
        placeholder="Search"
        onChangeText={handleSearchTextChange}
        value={searchText}
      />
      <Maps navigation={navigation} />
    </View>
  );
}
