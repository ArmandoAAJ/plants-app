import React, {useCallback, useEffect, useMemo} from 'react';
import {FlatList} from 'react-native';
import {useSelector, useDispatch, RootStateOrAny} from 'react-redux';

import creator from '../../store/ducks/cart';

import {Load} from '../../components/Load';
import {Header} from '../../components/Header';
import Product from '../../components/Product';

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
        return total.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            style: 'currency',
            currency: 'BRL',
        });
    }, [cart]);

    return (
        <Container>
            <Header back title="Meu Carrinho" total={totalCart} />
            <FlatList
                data={cart}
                ListEmptyComponent={() => (
                    <Content>
                        <Load type="cart" />
                        <Text>Seu carrinho está vazio.</Text>
                    </Content>
                )}
                renderItem={({item, index}) => (
                    <Product
                        removeToCart={(value: number) =>
                            handleRemoveProduct(value)
                        }
                        addToCart={(value: number) => handleAddProduct(value)}
                        product={item}
                        index={index}
                    />
                )}
                keyExtractor={(item) => String(item.id)}
            />
        </Container>
    );
};
