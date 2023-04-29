import styled from "styled-components/native";

export const Container = styled.View`
  border-radius: 8px;
  margin: 5px;
  border: 1px solid gray;
  flex: 1;
`;

export const Image = styled.Image`
  border-radius: 10px;
  width: 100%;
`;

export const ProductSection1 = styled.View`
  align-items: center;
`;

export const ProductSection2 = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin: 5px;
`;

export const ProductName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`;

export const LowerInfo = styled.Text`
  font-size: 16px;
`;
