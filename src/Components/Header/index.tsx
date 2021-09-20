import React, {useState} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
    Container,
    Right,
    Icon,
    Button,
    TextInput,
    Text,
    Middle,
} from './styles';

interface PropsHeader {
    back?: boolean;
    search?: boolean;
    bag?: boolean;
    choiceOption?: (value: string) => void;
    title?: string;
    total?: number;
}

export const Header = ({
    back,
    search,
    choiceOption,
    title,
    total,
    bag
}: PropsHeader) => {
    const [term, setTerm] = useState('');
    const navigation = useNavigation();

    const handleBack = () => {
        navigation.navigate('Home');
    };

    return (
        <Container>
            <Button onPress={() => handleBack()}>
                <Icon name="keyboard-backspace" />
            </Button>
            <Middle>
                <Text>{title}</Text>
            </Middle>
            <Right>
                <TextInput />
                <Icon name="search" padding={15} />
                {bag && (
                    <Button onPress={() => handleBag()}>
                        <Icon name="shopping-bag" />
                    </Button>
                )}
            </Right>
        </Container>
    );
};
