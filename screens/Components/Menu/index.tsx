import React, { useState } from "react";

import {
  Container,
  Content,
  Title,
  SubTitle,
  List,
  Item,
  Text,
  ButtonCart,
  Icon,
  ContentButton,
} from "./styles";

export const Menu = () => {
  const [chengeOptin, setChangeOption] = useState("indor");

  return (
    <Container>
      <Content>
        <Title>Green</Title>
        <SubTitle>Plants</SubTitle>
      </Content>
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
      <ContentButton>
        <ButtonCart>
          <Icon name="shopping-bag" />
        </ButtonCart>
      </ContentButton>
    </Container>
  );
};
