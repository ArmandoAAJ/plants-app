import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Container, Right, Icon, Button, TextInput} from './styles';

interface PropsHeader {
    back?: boolean;
    search?: boolean;
    bag?: boolean;
}

export const Header = ({back, search, bag}: PropsHeader) => {
    const [term, setTerm] = useState('');
    const navigation = useNavigation();
    const handleBack = () => {
        navigation.navigate('Home');
    };

    const handleSearch = () => {};

    const handleBag = () => {};

    return (
        <Container>
            <Button onPress={() => handleBack()}>
                {back && <Icon name="keyboard-backspace" />}
            </Button>

            <Right>
                {search && (
                    <>
                        <TextInput
                            onChangeText={setTerm}
                            value={term}
                            placeholder="Pesquisar"
                        />
                        <Button
                            onPress={() => handleSearch()}
                            disabled={term.length < 1}>
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
