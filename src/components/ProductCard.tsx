import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { StackTypes } from "../config/routes/Navigation";
import { useNavigation } from "@react-navigation/native";

import { ProductProps } from "../@types/products";
import { Pressable, Image, Box, Text } from "native-base";

const ProductCard = ({ id, name, price, description, image }: ProductProps) => {
  const navigation = useNavigation<StackTypes>();
  const [like, setLike] = React.useState(false);
  const handlePress = () => setLike(!like);

  const productInfos = () => {
    navigation.navigate("ProductInfos", {
      id,
      name,
      image,
      price,
      description,
    });
  };

  return (
    <Pressable
      flex={1}
      m={2}
      onPress={productInfos}
      borderRadius={10}
      borderWidth={1}
    >
      <Image
        width="100%"
        borderTopRadius={10}
        source={image}
        alt="item image"
      />
      <Box flexDir="row" justifyContent="center">
        <Text fontSize={18} bold>
          {name} #{id}
        </Text>
      </Box>

      <Box px={2}>
        <Box flexDir="row" justifyContent="space-between">
          <Text fontSize={16}>R$ {price}</Text>
          <AntDesign
            name={like ? "heart" : "hearto"}
            color={like ? "red" : "black"}
            size={20}
            onPress={handlePress}
          />
        </Box>

        <Box my={2}>
          <Text fontSize={16}>{description}</Text>
        </Box>
      </Box>
    </Pressable>
  );
};

export default ProductCard;
