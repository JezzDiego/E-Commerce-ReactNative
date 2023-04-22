import React from "react";

import { Contaier, LowerBox, MainText } from "./styles";
import TextFieldComponent from "../../components/TextField";
import ButtonComponent from "../../components/Button";
import { Alert } from "react-native";

const LoginPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmail = (value: string) => setEmail(value);

  const handlePassword = (value: string) => setPassword(value);

  const handlePress = () => {
    if (email.length && password.length > 0) {
      if (password.length < 6) {
        Alert.alert("Login", "A senha deve conter no mínimo 6 caracteres");
      } else {
        Alert.alert("Login", "Login efetuado com sucesso");
      }
    } else {
      Alert.alert("Login", "Preencha todos os campos");
    }
  };

  return (
    <>
      <Contaier>
        <MainText>Login</MainText>
      </Contaier>
      <LowerBox>
        <TextFieldComponent placeholder="Email" handleValue={handleEmail} />
        <TextFieldComponent
          placeholder="Senha"
          handleValue={handlePassword}
          secureText
        />

        <ButtonComponent title="Login" onPress={handlePress} />
      </LowerBox>
    </>
  );
};

export default LoginPage;
