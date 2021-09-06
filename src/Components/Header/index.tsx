import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Container, Right, Icon, Button} from './styles';

interface PropsHeader {
    back?: boolean;
    search?: boolean;
    bag?: boolean;
}

export const Header = ({back, search, bag}: PropsHeader) => {
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
                    <Button onPress={() => handleSearch()}>
                        <Icon name="search" padding={20} />
                    </Button>
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
