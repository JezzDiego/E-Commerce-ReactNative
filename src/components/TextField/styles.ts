import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Input = styled.TextInput`
  height: 40px;
  width: 70%;
  border-color: gray;
  border-width: 1px;
  border-radius: 5px;
  padding: 5px;
  margin: 20px;
`;

export const EyeIcon = styled(MaterialCommunityIcons)`
  position: absolute;
  right: 19%;
`;
