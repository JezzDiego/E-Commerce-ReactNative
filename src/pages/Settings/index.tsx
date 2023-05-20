import { useNavigation } from "@react-navigation/native";
import { Box, Button, Center } from "native-base";
import { StackTypes } from "../../config/routes/Navigation";

const Settings = () => {
  const navigation = useNavigation<StackTypes>();
  return (
    <Center flex={1} bgColor="#bbd6ff" safeArea>
      <Button
        colorScheme="tertiary"
        _text={{
          fontSize: "lg",
          fontWeight: "bold",
        }}
        onPress={() => navigation.replace("Login")}
      >
        Desconectar
      </Button>
    </Center>
  );
};

export default Settings;
