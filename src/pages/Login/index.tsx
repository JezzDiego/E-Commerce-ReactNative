import React from "react";
import { StatusBar } from "expo-status-bar";

import { Contaier, LowerBox, UpperBox, MainText } from "./styles";
import TextFieldComponent from "../../components/TextField";
import ButtonComponent from "../../components/Button";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../config/routes/Navigation";

const LoginPage = () => {
  const navigation = useNavigation<StackTypes>();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmail = (value: string) => setEmail(value);

  const handlePassword = (value: string) => setPassword(value);

  const handlePress = () => {
    if (email.length && password.length > 0) {
      if (password.length < 6) {
        Alert.alert("Login", "A senha deve conter no mínimo 6 caracteres");
      } else if (!email.includes("@")) {
        Alert.alert("Login", "Email inválido");
      } else {
        navigation.replace("Default");
      }
    } else {
      Alert.alert("Login", "Preencha todos os campos");
    }
  };

  return (
    <Contaier>
      <StatusBar style="auto" />
      <UpperBox>
        <MainText>Login</MainText>
      </UpperBox>

      <LowerBox>
        <TextFieldComponent
          placeholder="Email"
          handleValue={handleEmail}
          autoCompleteType="email"
          inputMode="email"
        />

        <TextFieldComponent
          placeholder="Senha"
          handleValue={handlePassword}
          autoCompleteType="password"
          inputMode="text"
          secureText
        />

        <ButtonComponent title="Login" onPress={handlePress} />
      </LowerBox>
    </Contaier>
  );
};

export default LoginPage;
