import { useNavigation } from "@react-navigation/native";
import { Box, Avatar, Text, VStack, Pressable, HStack } from "native-base";
import { StackTypes } from "../../config/routes/Navigation";
import { MaterialIcons } from "@expo/vector-icons";

const Settings = () => {
  const navigation = useNavigation<StackTypes>();

  return (
    <Box flex={1} alignItems="center" bgColor="#fff" safeArea p={4}>
      <Avatar my={4} size="xl" source={{ uri: "data:image/jpeg;base64,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"}} >Profile</Avatar>
      <Text fontFamily="Poppins-Bold" fontSize={20}>Nome de usuário</Text>

      <VStack width="100%" m={2} mt={8}>
        <HStack my={4}>
        <MaterialIcons name="person" size={25} color='#000' /><Pressable ml={2}><Text fontFamily="Poppins-Regular" color='#000' fontSize={18}>Perfil</Text></Pressable>
        </HStack>

        <HStack my={4}>
        <MaterialIcons name="notifications" size={25} color='#000' /><Pressable ml={2}><Text fontFamily="Poppins-Regular" color='#000' fontSize={18}>Notificações</Text></Pressable>
        </HStack>

        <HStack my={4}>
        <MaterialIcons name="location-searching" size={25} color='#000' /><Pressable ml={2}><Text fontFamily="Poppins-Regular" color='#000' fontSize={18}>Endereço</Text></Pressable>
        </HStack>

        <HStack my={4}>
        <MaterialIcons name="settings" size={25} color='#000' /><Pressable ml={2}><Text fontFamily="Poppins-Regular" color='#000' fontSize={18}>Preferências</Text></Pressable>
        </HStack>

        <HStack my={4}>
        <MaterialIcons name="exit-to-app" size={25} color="red" /><Pressable ml={2} onPress={() => navigation.replace("Login")}><Text fontFamily="Poppins-Regular" color='#000' fontSize={18}>Sair</Text></Pressable>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Settings;
