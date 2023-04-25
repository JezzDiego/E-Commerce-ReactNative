import React from "react";
import { Contaier, Title, ProductList } from "./styles";
import ProductCard from "../../components/ProductCard";
import Search from "../../components/Search";
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
    <Contaier>
      <Search />
      <Title>Produtos</Title>
      <ProductList data={products} numColumns={2} renderItem={renderItem} />
    </Contaier>
  );
};

export default HomePage;
