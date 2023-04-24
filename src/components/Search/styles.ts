import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const Input = styled.TextInput`
  height: 40px;
  width: 80%;
  border-color: gray;
  border-width: 1px;
  border-radius: 5px;
  padding: 10px;
  margin: 20px;

  background-color: #f5f5f5;
`;

export const SearchIcon = styled.View`
  position: absolute;
  right: 8%;
`;
