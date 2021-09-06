import React from "react";

import { Container, Lottie } from "./styles";

import loadAnimation from "../../assets/load.json";

export const Load: React.FC = () => {
  return (
    <Container>
      <Lottie source={loadAnimation} autoPlay loop />
    </Container>
  );
};