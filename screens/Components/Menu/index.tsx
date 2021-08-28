import React, { useState } from "react";

import {
  Container,
  Title,
  SubTitle,
  List,
  Item,
  Text,
  ButtonCart,
  Icon
} from "./styles";

export const Menu = () => {
  const [chengeOptin, setChangeOption] = useState("indor");

  return (
    <Container>
        <Title>Green</Title>
        <SubTitle>Plants</SubTitle>
        <List>
          <Item
            onPress={() => setChangeOption("indor")}
            disabled={chengeOptin === "indor"}
          >
            <Text color={chengeOptin === "indor"}>Indor</Text>
          </Item>
          <Item
            onPress={() => setChangeOption("outdor")}
            disabled={chengeOptin === "outdor"}
          >
            <Text color={chengeOptin === "outdor"}>Outdor</Text>
          </Item>
          <Item
            onPress={() => setChangeOption("garden")}
            disabled={chengeOptin === "garden"}
          >
            <Text color={chengeOptin === "garden"}>Garden</Text>
          </Item>
        </List>
        <List>
          <ButtonCart>
            <Icon name="shopping-bag" />
          </ButtonCart>
        </List>
    </Container>
  );
};
