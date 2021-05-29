import React, { useState } from "react";

import * as Fonts from "expo-font";
import AppLoading from "expo-app-loading";
import { enableScreens } from "react-native-screens";

import MealsNavigator from "./App/navigation/MealsNavigator";

enableScreens();

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
        onError={(err) => alert(err)}
      />
    );
  }
  return <MealsNavigator />;
};

export default App;
