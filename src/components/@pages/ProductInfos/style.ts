import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Image = styled.Image`
  width: 100%;
  margin-bottom: 20px;
`;

export const Text = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin: 10px;
  text-align: center;
`;

export const Description = styled.Text`
  font-size: 18px;
  margin: 10px;
  text-align: left;
  color: #525252;
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
`;

export const PriceContainer = styled.View`
  align-items: flex-start;
  background-color: #f5f5f5;
  padding: 12px;
`;

export const Price = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const BuyText = styled.Text`
  font-size: 18px;
  text-align: left;
  color: #525252;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin: 10px;
  text-align: center;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  background-color: #fee440;
  border-radius: 8px;
  margin-top: 20px;
  width: 95%;
  padding: 4px;
  margin-bottom: 20px;
`;
