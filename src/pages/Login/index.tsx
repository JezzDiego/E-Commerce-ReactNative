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

  const handlePress = () => Alert.alert("Login", "Login efetuado com sucesso");

  return (
    <>
      <Contaier>
        <MainText>Login</MainText>
      </Contaier>
      <LowerBox>
        <TextFieldComponent placeholder="Email" handleValue={handleEmail} />
        <TextFieldComponent placeholder="Senha" handleValue={handlePassword} />

        <ButtonComponent title="Login" onPress={handlePress} />
      </LowerBox>
    </>
  );
};

export default LoginPage;
