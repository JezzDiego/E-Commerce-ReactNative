import React from "react";
import { StackTypes } from "../config/routes/Navigation";
import { useNavigation } from "@react-navigation/native";

import { ProductProps } from "../@types/products";
import { Pressable, Image, Box, Text } from "native-base";

const ProductCard = ({ id, name, price, description, image }: ProductProps) => {
  const navigation = useNavigation<StackTypes>();

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(num);
  };

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
      borderWidth={2}
      borderStyle={"dashed"}
      borderColor="gray.300"
    >
      <Box flexDir="row">
        <Image source={image} alt="item image" />
        <Box justifyContent="space-between" flex={1} p={3}>
          <Text fontSize={18} bold>
            {name} #{id}
          </Text>

          <Text fontSize={16}>{formatNumber(price)}</Text>

          <Text color="green.400">
            Em 10x de {formatNumber(price / 10)} sem juros
          </Text>

          <Text fontSize={16} color="green.400">
            Frete Grátis
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
};

export default ProductCard;
