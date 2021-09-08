import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch, RootStateOrAny} from 'react-redux';
import creator from '../../store/ducks/listPlants';
import {Container, Right, Icon, Button, TextInput} from './styles';

interface PropsHeader {
    back?: boolean;
    search?: boolean;
    bag?: boolean;
}

export const Header = ({back, search, bag}: PropsHeader) => {
    const dispatch = useDispatch();
    const [term, setTerm] = useState('');
    const navigation = useNavigation();
    const handleBack = () => {
        navigation.navigate('Home');
    };

    const handleSearch = () => {
        dispatch(creator.search(term));
    };

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
                        <Button onPress={() => handleSearch()}>
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
