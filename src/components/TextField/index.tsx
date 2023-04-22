import React from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

import { Input } from "./styles";

type TextFieldProps = {
  placeholder: string;
  secureText?: boolean;
  handleValue: (name: string) => void;
};

const TextFieldComponent = ({
  placeholder,
  handleValue,
  secureText = false,
}: TextFieldProps) => {
  const [value, setValue] = React.useState("");

  const handleChange = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setValue(event.nativeEvent.text);
    handleValue(event.nativeEvent.text);
  };

  return (
    <Input
      secureTextEntry={secureText}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      autoCapitalize="none"
    />
  );
};

export default TextFieldComponent;
