import React from "react";
import { Box, FlatList, Icon, Input, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import ProductCard from "../../components/ProductCard";
import { ProductProps } from "../../@types/products";
import { ListRenderItem } from "react-native";

const HomePage = () => {
  const products: ProductProps[] = [
    {
      id: 1,
      name: "Mochila",
      price: 12,
      image: require("../../assets/backpack.png"),
      description: "Mochila legal",
    },
    {
      id: 2,
      name: "Sapato",
      price: 12,
      image: require("../../assets/shoes.png"),
      description: "Sapato Bonito",
    },
    {
      id: 3,
      name: "Sapato",
      price: 12,
      image: require("../../assets/shoes.png"),
      description: "Sapato Bonito",
    },
    {
      id: 4,
      name: "Sapato",
      price: 12,
      image: require("../../assets/shoes.png"),
      description: "Sapato Bonito",
    },
    {
      id: 5,
      name: "Sapato",
      price: 12,
      image: require("../../assets/shoes.png"),
      description: "Sapato Bonito",
    },
  ];

  const renderItem: ListRenderItem<ProductProps> = ({ item }) => (
    <ProductCard
      id={item.id}
      name={item.name}
      price={item.price}
      image={item.image}
      description={item.description}
      key={item.id}
    />
  );

  return (
    <Box flex={1} bgColor="white" safeArea>
      <Input
        type="text"
        placeholder="Faça a sua busca"
        InputRightElement={
          <Icon
            as={<MaterialIcons name="search" />}
            size={8}
            mr="2"
            color="muted.600"
          />
        }
        mx={2}
      />
      <FlatList
        data={products}
        numColumns={2}
        renderItem={renderItem}
        ListHeaderComponent={
          <Text textAlign="center" fontSize={26} my={4} bold>
            Produtos
          </Text>
        }
        showsVerticalScrollIndicator={false}
      />
    </Box>
  );
};

export default HomePage;
