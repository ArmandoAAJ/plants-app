import React, {useCallback, useEffect, useState} from 'react';
import {useSelector, useDispatch, RootStateOrAny} from 'react-redux';
import {
    Container,
    SVG,
    Content,
    Name,
    CardButtons,
    Actions,
    Icon,
} from './styles';
import creator from '../../store/ducks/listPlants';

const Product: React.FC = () => {
    const dispatch = useDispatch();
    const [isLoading, list, listFiltered] = useSelector(
        (state: RootStateOrAny) => [
            state.plants.isLoading,
            state.plants.list,
            state.plants.listFiltered,
        ],
    );

    const load = useCallback(() => {
        if (isLoading) return;
        dispatch(creator.getPlants());
    }, []);

    useEffect(() => load(), []);
    return (
        <>
            {list.map((p) => (
                <Container>
                    <SVG uri={p.photo} />
                    <Content>
                        <Name>{p.name}</Name>
                        <CardButtons>
                            <Actions
                                style={{
                                    borderTopLeftRadius: 5,
                                    borderBottomLeftRadius: 5,
                                }}>
                                <Icon name="add" />
                            </Actions>
                            <Actions
                                disabled
                                style={{
                                    borderRightWidth: 0.5,
                                    borderRightColor: '#000',
                                    borderLeftColor: '#000',
                                    borderLeftWidth: 0.2,
                                }}>
                                <Name>5</Name>
                            </Actions>
                            <Actions
                                style={{
                                    borderTopRightRadius: 5,
                                    borderBottomRightRadius: 5,
                                }}>
                                <Icon name="remove" />
                            </Actions>
                        </CardButtons>
                    </Content>
                </Container>
            ))}
        </>
    );
};

export default Product;
