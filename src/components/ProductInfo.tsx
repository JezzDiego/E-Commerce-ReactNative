import { ProductProps } from "../@types/products";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Box, ScrollView, Image, Text, Button } from "native-base";

type RoutParamList = {
  Product: ProductProps;
};

const ProductInfos = () => {
  const route = useRoute<RouteProp<RoutParamList, "Product">>();

  return (
    <Box flex={1} bgColor="#fff">
      <ScrollView>
        <Box alignItems="center" width="100%" my={4}>
          <Image source={route.params.image} alt="item image" />
        </Box>
        <Box mx={4}>
          <Text fontSize={24} bold textAlign="center">
            {route.params.name}
          </Text>
          <Text fontSize={18}>{route.params.description}</Text>
        </Box>
      </ScrollView>

      <Box p={4} bgColor="gray.200" borderTopRadius={20}>
        <Box my={4}>
          <Text fontSize={24} bold>
            R$ {route.params.price}
          </Text>
          <Text fontSize={18}>Adicione ao carrinho e não perca esse item!</Text>
        </Box>

        <Button
          p={4}
          my={4}
          bgColor="#fee440"
          _text={{
            color: "#000",
            fontSize: 18,
            bold: true,
          }}
        >
          Adicionar ao carrinho
        </Button>
      </Box>
    </Box>
  );
};

export default ProductInfos;
