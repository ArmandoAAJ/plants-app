import React from "react";

import { Header } from "../Components/Header";
import { Menu } from "../Components/Menu";
import { Container } from "./styles";

export const Home = () => {
  return (
    <Container>
      <Header bag search />
      <Menu />
    </Container>
  );
};
