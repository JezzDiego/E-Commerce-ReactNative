import React from "react";
import { ProductProps } from "../../@types/products";
import { AntDesign } from "@expo/vector-icons";
import {
  Container,
  Image,
  ProductName,
  ProductSection1,
  ProductSection2,
  LowerInfo,
} from "./styles";

const ProductCard = ({ id, name, price, description, image }: ProductProps) => {
  const [like, setLike] = React.useState(false);
  const handlePress = () => setLike(!like);

  return (
    <Container>
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
