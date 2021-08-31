import React, {useCallback, useEffect} from 'react';
import {FlatList, Text} from 'react-native';

import {useSelector, useDispatch, RootStateOrAny} from 'react-redux';

import {Header} from '../../Components/Header';
import {Menu} from '../../Components/Menu';

import creator from '../../store/ducks/listPlants';

import {Container, List} from './styles';

export const Home = () => {
    const dispatch = useDispatch();
    const [isLoading, list] = useSelector((state: RootStateOrAny) => [
        state.plants.isLoading,
        state.plants.list,
    ]);

    const load = useCallback(() => {
        dispatch(creator.getPlants());
    }, []);

    useEffect(() => load(), []);

    const renderItem = ({item}) => <Text key={item.id}>{item.name}</Text>;

    return (
        <Container>
            <Header bag search />
            <Menu />
            <List>
                <FlatList
                    data={list}
                    renderItem={renderItem}
                    keyExtractor={(item) => String(item.id)}
                />
            </List>
        </Container>
    );
};
