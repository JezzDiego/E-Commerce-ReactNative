import React from "react";
import {
  InputModeOptions,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { Input, Container, EyeIcon } from "./styles";
import { AutoCompleteProps } from "./types";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type TextFieldProps = {
  placeholder: string;
  autoCompleteType: AutoCompleteProps["autoComplete"];
  inputMode: InputModeOptions | undefined;
  secureText?: boolean;
  handleValue: (name: string) => void;
};

type IconName = "eye" | "eye-off";

const TextFieldComponent = ({
  placeholder,
  handleValue,
  autoCompleteType,
  inputMode,
  secureText = false,
}: TextFieldProps) => {
  const [value, setValue] = React.useState("");
  const [secureTextEntry, setSecureTextEntry] = React.useState(secureText);
  const [iconName, setIconName] = React.useState<IconName>("eye");

  const handleChange = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setValue(event.nativeEvent.text);
    handleValue(event.nativeEvent.text);
  };

  const handleIconName = () => {
    if (iconName === "eye") {
      setIconName("eye-off");
      setSecureTextEntry(false);
    } else {
      setIconName("eye");
      setSecureTextEntry(true);
    }
  };

  return (
    <Container>
      <Input
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        autoCapitalize="none"
        autoCorrect={false}
        autoComplete={autoCompleteType}
        inputMode={inputMode}
      />
      {secureText && (
        <EyeIcon>
          <MaterialCommunityIcons
            name={iconName}
            size={24}
            color="black"
            onPress={handleIconName}
          />
        </EyeIcon>
      )}
    </Container>
  );
};

export default TextFieldComponent;
