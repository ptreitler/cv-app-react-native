import React from "react";
import { StyleContext } from "./contexts/StyleContext";
import TabNavigator from "./components/TabNavigator";

export default function App() {
  return (
    <StyleContext>
      <TabNavigator />
    </StyleContext>
  );
}
