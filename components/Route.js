
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../Screens/Home/Home";
import RegistrationScreen from "../Screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "../Screens/LoginScreen/LoginScreen";

const AuthStack = createStackNavigator();

export const Route = (isAuth, navigation) => {
  // const handleGoBack = () => {
  //   navigation.goBack();
  // };

  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
      </AuthStack.Navigator>
    );
  }

  return <Home />;
};
