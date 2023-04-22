import React from "react";
import { ActionButton, ButtonText } from "./styles";

type ButtonProps = {
  title: string;
  onPress: () => void;
};

const ButtonComponent = ({ title, onPress }: ButtonProps) => {
  return (
    <ActionButton onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </ActionButton>
  );
};

export default ButtonComponent;
