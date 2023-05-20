import React, { useCallback, useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../config/routes/Navigation";
import {
  Box,
  Button,
  FormControl,
  Icon,
  Input,
  Pressable,
  ScrollView,
  Stack,
  Text,
  WarningOutlineIcon,
} from "native-base";
import {
  emailvalidation,
  passwordvalidation,
} from "../../functions/validation";
import { MaterialIcons } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const LoginPage = () => {
  //hooks
  const navigation = useNavigation<StackTypes>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  //loading fonts
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins/Poppins-Regular.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }

  //functions
  const handleEmail = (e: NativeSyntheticEvent<TextInputChangeEventData>) =>
    setEmail(e.nativeEvent.text);

  const handlePassword = (e: NativeSyntheticEvent<TextInputChangeEventData>) =>
    setPassword(e.nativeEvent.text);

  const handlePress = () => {
    navigation.replace("Default");
  };

  return (
    <ScrollView flex={1} bgColor="white">
      <Box
        bgColor="#bbd6ff"
        alignItems="flex-start"
        justifyContent="space-between"
        onLayout={onLayoutRootView}
        safeArea
      >
        <Text
          fontSize="32"
          color="white"
          letterSpacing={2}
          maxWidth={210}
          mx={6}
          my="25%"
          fontFamily="Poppins-Regular"
        >
          Bem-vindo{"\n"}de volta!
        </Text>

        <Box px={8} py={14} borderTopRadius={20} bgColor="white" w="100%">
          <FormControl
            isRequired
            isInvalid={email.length > 0 && !emailvalidation(email)}
            my={6}
          >
            <Stack space={2}>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                type="text"
                placeholder="Digite seu email"
                value={email}
                onChange={handleEmail}
                autoCapitalize="none"
                onPressIn={() => setEmail("")}
                InputRightElement={
                  <Icon
                    as={<MaterialIcons name="person" />}
                    size={5}
                    mr="2"
                    color="muted.600"
                  />
                }
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Informe um email válido.
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>

          <FormControl
            isRequired
            isInvalid={password.length > 0 && !passwordvalidation(password)}
            my={4}
          >
            <Stack space={2}>
              <FormControl.Label>Senha</FormControl.Label>
              <Input
                type="password"
                placeholder="Digite sua senha"
                autoCapitalize="none"
                secureTextEntry={!show}
                value={password}
                onChange={handlePassword}
                InputRightElement={
                  <Pressable onPress={() => setShow(!show)}>
                    <Icon
                      as={
                        <MaterialIcons
                          name={show ? "visibility" : "visibility-off"}
                        />
                      }
                      size={5}
                      mr="2"
                      color="muted.600"
                    />
                  </Pressable>
                }
              />
            </Stack>
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Informe uma senha válida.
            </FormControl.ErrorMessage>
          </FormControl>

          <Button
            disabled={!(emailvalidation(email) && passwordvalidation(password))}
            colorScheme={
              !(emailvalidation(email) && passwordvalidation(password))
                ? "gray"
                : "tertiary"
            }
            _text={{
              fontSize: "lg",
              fontWeight: "bold",
            }}
            mt="1/2"
            onPress={handlePress}
          >
            Login
          </Button>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default LoginPage;
