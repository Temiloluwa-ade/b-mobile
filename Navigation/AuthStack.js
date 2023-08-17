import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/Onboarding/SplashScreen";
import Onboard from "../screens/Onboarding/Onboard";
import Login from "../screens/Onboarding/Login"

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="Onboarding"
        component={Onboard}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export default AuthStack;