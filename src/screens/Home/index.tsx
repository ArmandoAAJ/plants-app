import React, {useCallback, useEffect} from 'react';
import {FlatList, Text} from 'react-native';

import {useSelector, useDispatch, RootStateOrAny} from 'react-redux';

import {Header} from '../../Components/Header';
import {Menu} from '../../Components/Menu';
import { ListItem } from '../../Components/ListItem';

import creator from '../../store/ducks/listPlants';

import {Container, List} from './styles';

export const Home = () => {
    const dispatch = useDispatch();
    const [isLoading, list, listFiltered] = useSelector(
        (state: RootStateOrAny) => [
            state.plants.isLoading,
            state.plants.list,
            state.plants.listFiltered,
        ],
    );

    const load = useCallback(() => {
        dispatch(creator.getPlants());
    }, []);

    useEffect(() => load(), []);

    return (
        <Container>
            <Header bag search />
            <Menu />
            <List>
                <FlatList
                    data={listFiltered.length < 1 ? list : listFiltered}
                    renderItem={({item}) => <ListItem plant={item}/>}
                    keyExtractor={(item) => String(item.id)}
                />
            </List>
        </Container>
    );
};
