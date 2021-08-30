import React, {useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {Header} from '../../Components/Header';
import {Menu} from '../../Components/Menu';

import creator from '../../store/ducks/listPlants';

import {Container} from './styles';

export const Home = () => {
    const dispatch = useDispatch();

    const load = useCallback(() => {
        dispatch(creator.getPlants());
    }, []);

    useEffect(() => load(), []);

    return (
        <Container>
            <Header bag search />
            <Menu />
        </Container>
    );
};
