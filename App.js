import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const dataList = [
  { key: "1" },
  { key: "2" },
  { key: "3" },
  { key: "4" },
  { key: "5" },
];
export default class App extends Component {
  _renderItem = ({ item, index }) => {
    return (
      <View style={styles.item}>
        <Text>{item.key}</Text>
      </View>
    );
  };

  render() {
    let { container, itemText } = styles;
    return (
      <View style={container}>
        <FlatList
          data={dataList}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  itemText: {
    fontSize: 50,
  },
  item: {
    backgroundColor: "#3232ff",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
  },
});
