import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { ProductProps } from "../../@types/products";

import LoginPage from "../../pages/Login";
import Default from "../../pages/Default";
import ProductInfo from "../../components/ProductInfo";

type Stacknavigation = {
  Login: undefined;
  Default: undefined;
  ProductInfos: ProductProps;
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
        <Stack.Screen
          name="ProductInfos"
          component={ProductInfo}
          options={{
            headerShown: true,
            headerTitle: "Detalhes do produto",
            headerStyle: {
              backgroundColor: "#fee440",
            },
            headerTintColor: "#000",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
