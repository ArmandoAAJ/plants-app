import React, {useMemo} from 'react';
import {useNavigation} from '@react-navigation/native';

import {
    Container,
    SVG,
    Content,
    Name,
    Price,
    CardButtons,
    Actions,
    Icon,
    Button,
} from './styles';

import {PlantProps} from '../../config/types';

interface PropsProduct {
    product: PlantProps;
    addToCart: (id: number) => void;
    removeToCart: (id: number) => void;
    index: number;
}

const Product: React.FC<PropsProduct> = ({
    product,
    addToCart,
    removeToCart,
    index,
}) => {
    const navigation = useNavigation();
    const icon = product.quantity && product.quantity < 2 ? 'delete' : 'remove';
    const bounce = index % 2 !== 0 ? 'bounceInLeft' : 'bounceInRight';
    const duration = index * 100 + 1500;

    const totalInCart = useMemo(() => {
        if (!product.quantity) return;
        const newValue = product.price * product.quantity;
        return newValue.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            style: 'currency',
            currency: 'BRL',
        });
    }, [product.quantity]);

    return (
        <Container animation={`${bounce}`} duration={duration}>
            <Button
                onPress={() => navigation.navigate('Plant', {plant: product})}>
                <SVG uri={product.photo} />
                <Content>
                    <Name>{product.name}</Name>
                    <Price>{totalInCart}</Price>
                    <CardButtons>
                        <Actions
                            onPress={() => removeToCart(product.id)}
                            style={{
                                borderTopLeftRadius: 5,
                                borderBottomLeftRadius: 5,
                            }}>
                            <Icon name={`${icon}`} />
                        </Actions>
                        <Actions
                            disabled
                            style={{
                                borderRightWidth: 0.5,
                                borderRightColor: '#000',
                                borderLeftColor: '#000',
                                borderLeftWidth: 0.2,
                            }}>
                            <Name>{product.quantity}</Name>
                        </Actions>
                        <Actions
                            onPress={() => addToCart(product.id)}
                            style={{
                                borderTopRightRadius: 5,
                                borderBottomRightRadius: 5,
                            }}>
                            <Icon name="add" />
                        </Actions>
                    </CardButtons>
                </Content>
            </Button>
        </Container>
    );
};

export default Product;
