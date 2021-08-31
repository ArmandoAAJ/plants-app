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
    const dispatch = useDispatch();
    const [option, setOption] = useState('');

    useEffect(() => {
        dispatch(creator.filter(option));
    }, [option]);

    return (
        <Container>
            <Content>
                <Title>Green</Title>
                <SubTitle>Plants</SubTitle>
            </Content>
            <List>
                <Item
                    onPress={() => setOption('indoor')}
                    disabled={option === 'indoor'}>
                    <Text color={option === 'indoor'}>Indoor</Text>
                </Item>
                <Item
                    onPress={() => setOption('outdoor')}
                    disabled={option === 'outdoor'}>
                    <Text color={option === 'outdoor'}>Outdoor</Text>
                </Item>
                <Item
                    onPress={() => setOption('garden')}
                    disabled={option === 'garden'}>
                    <Text color={option === 'garden'}>Garden</Text>
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
