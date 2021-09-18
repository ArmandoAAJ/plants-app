import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch, RootStateOrAny} from 'react-redux';
import {Container, Right, Icon, Button, TextInput, Text} from './styles';

interface PropsHeader {
    back?: boolean;
    search?: boolean;
    bag?: boolean;
    choiceOption?: (value: string) => void;
    title?: string;
}

export const Header = ({
    back,
    search,
    bag,
    choiceOption,
    title,
}: PropsHeader) => {
    const [term, setTerm] = useState('');
    const navigation = useNavigation();

    const handleBack = () => {
        navigation.navigate('Home');
    };

    const handleBag = () => {};

    return (
        <Container>
            <Button onPress={() => handleBack()}>
                {back && <Icon name="keyboard-backspace" />}
            </Button>

            <Right>
                {title && <Text>{title}</Text>}
                {search && (
                    <>
                        <TextInput
                            onChangeText={setTerm}
                            value={term}
                            placeholder="Pesquisar"
                        />
                        <Button
                            onPress={() => choiceOption && choiceOption(term)}>
                            <Icon name="search" padding={5} />
                        </Button>
                    </>
                )}
                {bag && (
                    <Button onPress={() => handleBag()}>
                        <Icon name="shopping-bag" />
                    </Button>
                )}
            </Right>
        </Container>
    );
};
