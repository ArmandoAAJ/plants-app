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

export const Menu = ({choiceOption}) => {
    const [option, setOption] = useState('');

    interface handleFilterProps {
        value: String;
    }

    const handleFilter = ({value}: handleFilterProps) => {
        if (value !== option) {
            setOption(`${value}`);
            choiceOption(value);
        } else {
            setOption('');
            choiceOption('');
        }
    };

    return (
        <Container>
            <Content>
                <Title>Green</Title>
                <SubTitle>Plants</SubTitle>
            </Content>
            <List>
                <Item onPress={() => handleFilter({value: 'indoor'})}>
                    <Text color={option === 'indoor'}>Indoor</Text>
                </Item>
                <Item onPress={() => handleFilter({value: 'outdoor'})}>
                    <Text color={option === 'outdoor'}>Outdoor</Text>
                </Item>
                <Item onPress={() => handleFilter({value: 'garden'})}>
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
