import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import LoginPage from "../../pages/Login";
import Default from "../../pages/Default";

type Stacknavigation = {
  Login: undefined;
  Default: undefined;
};

export type StackTypes = NativeStackNavigationProp<Stacknavigation>;

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Default" component={Default} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
