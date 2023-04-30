import React from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  Container,
  Image,
  ProductName,
  ProductSection1,
  ProductSection2,
  LowerInfo,
} from "./styles";
import { StackTypes } from "../../config/routes/Navigation";
import { useNavigation } from "@react-navigation/native";

import { ProductProps } from "../../@types/products";

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
    <Container onPress={productInfos}>
      <Image source={image} />
      <ProductSection1>
        <ProductName>
          {name} #{id}
        </ProductName>
      </ProductSection1>

      <ProductSection2>
        <LowerInfo>R$ {price}</LowerInfo>
        <AntDesign
          name={like ? "heart" : "hearto"}
          color={like ? "red" : "black"}
          size={20}
          onPress={handlePress}
        />
      </ProductSection2>

      <ProductSection2>
        <LowerInfo>{description}</LowerInfo>
      </ProductSection2>
    </Container>
  );
};

export default ProductCard;
