import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

import Theme from "../../../theme.json";

export const Container = styled.View`
  height: 100px;
  background-color: ${Theme.pallet.primary.color};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 20px 30px;
`;

export const Right = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

interface IconProps {
  padding: number;
}

export const Icon = styled(MaterialIcons).attrs({
  color: Theme.pallet.primary.text_color,
  size: 25,
})<IconProps>`
  margin-right: ${(props) => props.padding || 0}px;
`;

export const Button = styled.TouchableOpacity``;
