import styled from "styled-components/native";
import LottieView from "lottie-react-native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Lottie = styled(LottieView)`
  background-color: transparent;
  height: 200px;
  width: 200px;
`;