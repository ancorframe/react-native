import * as Font from "expo-font";
import { View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as SplashScreen from "expo-splash-screen";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import { Home } from "./Screens/Home/Home";
import { Main } from "./components/Main";
import { Provider } from "react-redux";
import {store}from './redux/store'
import { PostsScreen } from "./Screens/PostsScreen/PostsScreen";

const loadFonts = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto/Roboto-Light.ttf"),
  });
};

SplashScreen.preventAutoHideAsync();
const AuthStack = createStackNavigator(); // вказує на групу навігаторів

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await loadFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    })();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
        }}
        onLayout={onLayoutRootView}
      >
        <Main />
        {/* <PostsScreen/> */}
      </View>
    </Provider>
  );
}
