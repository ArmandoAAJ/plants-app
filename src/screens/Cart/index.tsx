import React, {useCallback, useEffect, useMemo} from 'react';
import {FlatList} from 'react-native';
import {useSelector, useDispatch, RootStateOrAny} from 'react-redux';

import creator from '../../store/ducks/cart';

import {Load} from '../../Components/Load';
import {Header} from '../../Components/Header';
import Product from '../../Components/Product';

import {Container, Content, Text} from './styles';
import {PlantProps} from '../../config/types';

export const Cart: React.FC = () => {
    const dispatch = useDispatch();
    const [isLoading, cart] = useSelector((state: RootStateOrAny) => [
        state.cart.isLoading,
        state.cart.cart,
    ]);

    const load = useCallback(() => {
        if (isLoading) return;
        dispatch(creator.getCart());
    }, []);

    useEffect(() => load(), []);

    const handleAddProduct = (value: number) => {
        dispatch(creator.addCart(value));
    };

    const handleRemoveProduct = (value: number) => {
        dispatch(creator.removeCart(value));
    };

    const totalCart = useMemo(() => {
        const total = cart.reduce((acumulator: number, item: PlantProps) => {
            return acumulator + item.price * (item.quantity || 1);
        }, 0);
        return total;
    }, [cart]);

    return (
        <Container>
            <Header back title="My Cart" total={totalCart} />
            <FlatList
                data={cart}
                ListEmptyComponent={() => (
                    <Content>
                        <Load type="cart" />
                        <Text>The cart is empty.</Text>
                    </Content>
                )}
                renderItem={({item}) => (
                    <Product
                        removeToCart={(value: number) =>
                            handleRemoveProduct(value)
                        }
                        addToCart={(value: number) => handleAddProduct(value)}
                        product={item}
                    />
                )}
                keyExtractor={(item) => String(item.id)}
            />
        </Container>
    );
};
