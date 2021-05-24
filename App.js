import React, { useState } from "react";
import { Text, View } from "react-native";

import * as Fonts from "expo-font";
import AppLoading from "expo-app-loading";

const fetchFonts = () => {
  return Fonts.loadAsync({
    "open-sans": require("./App/assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./App/assets/fonts/OpenSans-Bold.ttf"),
  });
};

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontFamily: "open-sans-bold" }}>Hello World!</Text>
    </View>
  );
};

export default App;
