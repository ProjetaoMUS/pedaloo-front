import React, { useState } from "react";
import { View } from "react-native";
import { Search } from "../Search";

import { Maps } from "../Maps";
import { styles } from "./styles";

export function Home({ navigation }) {
  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.container}>
      <Search
        placeholder="Search"
        onChangeText={setSearchText}
        value={searchText}
        onPress={() => navigation.navigate("Parking Places")}
      />
      <Maps navigation={navigation} />
    </View>
  );
}
