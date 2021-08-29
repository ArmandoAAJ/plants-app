import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

import Theme from "../../../theme.json";

export const Container = styled.View`
  position: absolute;
  justify-content: space-between;
  background-color: ${Theme.pallet.secondary.color};
  width: 30%;
  top: 0;
  bottom: 0;
`;

export const Content = styled.View``;

export const ContentButton = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 40px;
`;

export const Title = styled.Text`
  display: flex;
  padding-left: 40%;
  width: 100%;
  position: relative;
  font-size: ${Theme.text.normal}px;
  color: ${Theme.pallet.secondary.text_color};
  font-weight: bold;
  padding-top: 60px;
`;

export const SubTitle = styled.Text`
  display: flex;
  width: 150%;
  padding-left: 40%;
  position: relative;
  font-size: 35px;
  color: ${Theme.pallet.primary.text_color};
  font-weight: bold;
`;

export const List = styled.View``;

export const Item = styled.TouchableOpacity`
  margin-bottom: 80px;
`;

interface PropsText {
  color: boolean;
}

export const Text = styled.Text<PropsText>`
  color: ${({ color }) =>
    color
      ? Theme.pallet.primary.text_color
      : Theme.pallet.secondary.text_color};
  font-size: ${Theme.text.large}px;
  font-weight: bold;
  text-align: center;
  transform: rotate(270deg);
`;

export const ButtonCart = styled.TouchableOpacity`
  background-color: #535353;
  border-radius: 30px;
  height: 60px;
  width: 60px;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(MaterialIcons).attrs({
  color: Theme.pallet.primary.text_color,
  size: 25,
})``;
