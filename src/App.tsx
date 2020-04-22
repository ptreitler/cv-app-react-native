import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StyleContext } from "./contexts/StyleContext";

export default function App() {
  return (
    <StyleContext>
      <Text>Open up App.tsx to start working on your app!</Text>
    </StyleContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});