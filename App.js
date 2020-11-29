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
        <Text style={styles.itemText}>{item.key}</Text>
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
          numColumns={3}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
  },
  itemText: {
    fontSize: 50,
    color: "#fff",
  },
  item: {
    flex: 1,
    backgroundColor: "#3232ff",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    margin: 1,
  },
});
