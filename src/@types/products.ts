import { ImageSourcePropType } from "react-native";

export type ProductProps = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: ImageSourcePropType;
};
