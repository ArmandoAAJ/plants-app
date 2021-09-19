import React, {useCallback, useEffect} from 'react';
import {FlatList} from 'react-native';
import {useSelector, useDispatch, RootStateOrAny} from 'react-redux';

import creator from '../../store/ducks/cart';

import {Header} from '../../Components/Header';
import Product from '../../Components/Product';

import {Container} from './styles';

export const Cart: React.FC = () => {
    const dispatch = useDispatch();
    const [isLoading, cart] = useSelector((state: RootStateOrAny) => [
        state.cart.isLoading,
        state.cart.cart,
    ]);

    const load = useCallback(() => {
        if (isLoading) return;
        dispatch(creator.getCart());
        handleAddProduct(1);
    }, []);

    useEffect(() => load(), []);

    const handleAddProduct = (value: number) => {
        dispatch(creator.addCart(value));
    };

    return (
        <Container>
            <Header back title="My Cart" />
            <FlatList
                data={cart}
                renderItem={({item}) => (
                    <Product
                        addToCart={(value: number) => handleAddProduct(value)}
                        item={item}
                    />
                )}
                keyExtractor={(item) => item.id}
            />
        </Container>
    );
};
