import React, { ReactNode } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { View, StyleSheet } from "react-native";

export function StyleContext(props: { children: ReactNode }) {
  return (
    <PaperProvider>
      <View style={styles.screenContainer}>{props.children}</View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    overflow: "hidden",
  },
});
