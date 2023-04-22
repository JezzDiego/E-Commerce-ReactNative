import React from "react";
import {
  InputModeOptions,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";

import { Input } from "./styles";

type AutoCompleteProps = {
  autoComplete:
    | "birthdate-day"
    | "birthdate-full"
    | "birthdate-month"
    | "birthdate-year"
    | "cc-csc"
    | "cc-exp"
    | "cc-exp-day"
    | "cc-exp-month"
    | "cc-exp-year"
    | "cc-number"
    | "email"
    | "gender"
    | "name"
    | "name-family"
    | "name-given"
    | "name-middle"
    | "name-middle-initial"
    | "name-prefix"
    | "name-suffix"
    | "password"
    | "password-new"
    | "postal-address"
    | "postal-address-country"
    | "postal-address-extended"
    | "postal-address-extended-postal-code"
    | "postal-address-locality"
    | "postal-address-region"
    | "postal-code"
    | "street-address"
    | "sms-otp"
    | "tel"
    | "tel-country-code"
    | "tel-national"
    | "tel-device"
    | "username"
    | "username-new"
    | "off";
};

type TextFieldProps = {
  placeholder: string;
  autoCompleteType: AutoCompleteProps["autoComplete"];
  inputMode: InputModeOptions | undefined;
  secureText?: boolean;
  handleValue: (name: string) => void;
};

const TextFieldComponent = ({
  placeholder,
  handleValue,
  autoCompleteType,
  inputMode,
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
      autoCorrect={false}
      autoComplete={autoCompleteType}
      inputMode={inputMode}
    />
  );
};

export default TextFieldComponent;
