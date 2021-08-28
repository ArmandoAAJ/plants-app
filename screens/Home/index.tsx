import React from "react";

import { Header } from "../Components/Header";
import { Container } from "./styles";

export const Home: React.FC = () => {
  return (
    <Container>
      <Header
        bag
        search
        back
      />
    </Container>
  );
};
