import { ProductProps } from "../../../@types/products";
import { RouteProp, useRoute } from "@react-navigation/native";

import {
  Container,
  Image,
  Text,
  Description,
  ScrollView,
  PriceContainer,
  Price,
  BuyText,
  Button,
  ButtonText,
  ButtonContainer,
} from "./style";

type RoutParamList = {
  Product: ProductProps;
};

const ProductInfos = () => {
  const route = useRoute<RouteProp<RoutParamList, "Product">>();

  return (
    <Container>
      <ScrollView>
        <Image source={route.params.image} />
        <Text>{route.params.name}</Text>
        <Description>{route.params.description}</Description>
      </ScrollView>

      <PriceContainer>
        <Price>R$ {route.params.price}</Price>
        <BuyText>Adicione ao carrinho e não perca esse item!</BuyText>
        <ButtonContainer>
          <Button>
            <ButtonText>Adicionar ao carrinho</ButtonText>
          </Button>
        </ButtonContainer>
      </PriceContainer>
    </Container>
  );
};

export default ProductInfos;
