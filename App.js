import React, { useState } from "react";

import * as Fonts from "expo-font";
import AppLoading from "expo-app-loading";
import { enableScreens } from "react-native-screens";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import MealsReducer from "./App/store/reducers/meals.reducer";

import MealsNavigator from "./App/navigation/MealsNavigator";

enableScreens();

const rootReducer = combineReducers({
  meals: MealsReducer,
});
const store = createStore(rootReducer);

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
  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
};

export default App;
