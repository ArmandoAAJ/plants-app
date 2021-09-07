import React, {useCallback, useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import {useSelector, useDispatch, RootStateOrAny} from 'react-redux';

import {Load} from '../../Components/Load';
import {Header} from '../../Components/Header';
import {Menu} from '../../Components/Menu';
import {ListItem} from './ListItem';

import creator from '../../store/ducks/listPlants';

import {Container, List} from './styles';

export const Home: React.FC = (props) => {
    const dispatch = useDispatch();
    const [isLoading, list, listFiltered] = useSelector(
        (state: RootStateOrAny) => [
            state.plants.isLoading,
            state.plants.list,
            state.plants.listFiltered,
        ],
    );
    const [loading, setLoading] = useState(true);

    const load = useCallback(() => {
        if (isLoading) return;
        dispatch(creator.getPlants());
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    useEffect(() => load(), []);

    return (
        <Container>
            <Header search bag />
            <Menu />
            <List>
                {loading && <Load />}
                {!loading && (
                    <FlatList
                        data={listFiltered.length > 0 ? listFiltered : list}
                        renderItem={({item}) => <ListItem plant={item} />}
                        keyExtractor={(item) => String(item.id)}
                    />
                )}
            </List>
        </Container>
    );
};
