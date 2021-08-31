import React, {useCallback, useEffect, useState} from 'react';

import {useSelector, useDispatch, RootStateOrAny} from 'react-redux';

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
} from './styles';

import creator from '../../store/ducks/listPlants';

export const Menu = () => {
    const [chengeOptin, setChangeOption] = useState('');

    return (
        <Container>
            <Content>
                <Title>Green</Title>
                <SubTitle>Plants</SubTitle>
            </Content>
            <List>
                <Item
                    onPress={() => setChangeOption('indor')}
                    disabled={chengeOptin === 'indor'}>
                    <Text color={chengeOptin === 'indor'}>Indor</Text>
                </Item>
                <Item
                    onPress={() => setChangeOption('outdor')}
                    disabled={chengeOptin === 'outdor'}>
                    <Text color={chengeOptin === 'outdor'}>Outdor</Text>
                </Item>
                <Item
                    onPress={() => setChangeOption('garden')}
                    disabled={chengeOptin === 'garden'}>
                    <Text color={chengeOptin === 'garden'}>Garden</Text>
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
