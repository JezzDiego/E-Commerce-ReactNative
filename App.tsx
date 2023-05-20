import React from "react";

import { StackNavigation } from "./src/config/routes/Navigation";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <StackNavigation />
    </NativeBaseProvider>
  );
}
