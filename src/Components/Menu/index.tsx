import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
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

interface PropsMenu {
    choiceOption: (value: string) => void;
}

interface handleFilterProps {
    value: string;
}

export const Menu: React.FC<PropsMenu> = ({choiceOption}) => {
    const navigation = useNavigation();
    const [option, setOption] = useState('');

    const handleFilter = ({value}: handleFilterProps) => {
        if (value !== option) {
            setOption(`${value}`);
            choiceOption(value);
        } else {
            setOption('');
            choiceOption('');
        }
    };

    const handdleOpenCart = () => {
        navigation.navigate('Cart');
    };

    return (
        <Container>
            <Content>
                <Title>Green</Title>
                <SubTitle>Plants</SubTitle>
            </Content>
            <List>
                <Item onPress={() => handleFilter({value: 'indoor'})}>
                    <Text color={option === 'indoor'}>Iterior</Text>
                </Item>
                <Item onPress={() => handleFilter({value: 'outdoor'})}>
                    <Text color={option === 'outdoor'}>Exterior</Text>
                </Item>
                <Item onPress={() => handleFilter({value: 'garden'})}>
                    <Text color={option === 'garden'}>Jardim</Text>
                </Item>
            </List>
            <ContentButton>
                <ButtonCart onPress={() => handdleOpenCart()}>
                    <Icon name="shopping-bag" />
                </ButtonCart>
            </ContentButton>
        </Container>
    );
};
