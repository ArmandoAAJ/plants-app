import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch, RootStateOrAny} from 'react-redux';
import creator from '../../store/ducks/listPlants';
import {Container, Right, Icon, Button, TextInput} from './styles';

interface PropsHeader {
    back?: boolean;
    search?: boolean;
    bag?: boolean;
    choiceOption: (value: string) => void;
}

export const Header = ({back, search, bag, choiceOption}: PropsHeader) => {
    const dispatch = useDispatch();
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
                {search && (
                    <>
                        <TextInput
                            onChangeText={setTerm}
                            value={term}
                            placeholder="Pesquisar"
                        />
                        <Button onPress={() => choiceOption(term)}>
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
