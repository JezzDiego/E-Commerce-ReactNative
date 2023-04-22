import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, StatusBar as NotificationArea } from "react-native";

import Login from "./src/pages/Login";

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: NotificationArea.currentHeight,
    backgroundColor: "#bbd6ff",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
