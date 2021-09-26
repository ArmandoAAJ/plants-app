import React, {useState} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Container, Content, Icon, Button, TextInput, Text} from './styles';

interface PropsHeader {
    back?: boolean;
    search?: boolean;
    bag?: boolean;
    choiceOption?: (value: string) => void;
    title?: string;
    total?: number;
}

export const Header: React.FC<PropsHeader> = ({
    back,
    search,
    choiceOption,
    title,
    total,
    bag,
}) => {
    const [term, setTerm] = useState('');
    const navigation = useNavigation();

    const handleBack = () => {
        navigation.navigate('Home');
    };

    const handleBag = () => {
        navigation.navigate('Cart');
    };

    const backComponent = () => {
        if (!back) return;
        return (
            <Button onPress={() => handleBack()}>
                <Icon name="keyboard-backspace" />
            </Button>
        );
    };

    const bagComponent = () => {
        if (!bag) return;
        return (
            <Button onPress={() => handleBag()}>
                <Icon name="shopping-bag" />
            </Button>
        );
    };

    const searchComponent = () => {
        if (!search) return;
        return (
            <Content>
                <TextInput
                    onChangeText={setTerm}
                    value={term}
                    placeholder="Pesquisar"
                />
                <Button onPress={() => choiceOption && choiceOption(term)}>
                    <Icon name="search" padding={5} />
                </Button>
            </Content>
        );
    };

    const titleComponent = () => {
        if (!title) return;
        return <Text>{title}</Text>;
    };

    const totalComponent = () => {
        if (!total) return;
        return <Text>{total}</Text>;
    };

    return (
        <Container>
            {backComponent()}
            {searchComponent()}
            {titleComponent()}
            {bagComponent()}
            {totalComponent()}
        </Container>
    );
};
