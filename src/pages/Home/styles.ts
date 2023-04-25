import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";
import { ProductProps } from "../../@types/products";

export const Contaier = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
`;

export const Title = styled.Text`
  font-size: 26px;
  color: #333;
  margin: 20px;
  font-weight: bold;
`;

export const ProductList = styled(
  FlatList as new (props: FlatListProps<ProductProps>) => FlatList<ProductProps>
)`
  flex: 1;
  width: 100%;
`;
