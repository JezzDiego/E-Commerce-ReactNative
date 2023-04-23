import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const Input = styled.TextInput`
  height: 40px;
  width: 70%;
  border-color: gray;
  border-width: 1px;
  border-radius: 5px;
  padding: 10px;
  margin: 20px;

  background-color: #f5f5f5;
`;

export const SearchIcon = styled(MaterialCommunityIcons)`
  position: absolute;
  right: 10%;
`;
