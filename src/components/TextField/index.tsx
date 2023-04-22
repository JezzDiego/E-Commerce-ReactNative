import React from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

import { Input } from "./styles";

type TextFieldProps = {
  placeholder: string;
  handleValue: (name: string) => void;
};

const TextFieldComponent = ({ placeholder, handleValue }: TextFieldProps) => {
  const [value, setValue] = React.useState("");

  const handleChange = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setValue(event.nativeEvent.text);
    handleValue(event.nativeEvent.text);
  };

  return (
    <Input placeholder={placeholder} value={value} onChange={handleChange} />
  );
};

export default TextFieldComponent;
