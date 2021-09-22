import React from 'react';
import {
    Container,
    SVG,
    Content,
    Name,
    Price,
    CardButtons,
    Actions,
    Icon,
} from './styles';

import {PlantProps} from '../../config/types';

interface PropsProduct {
    product: PlantProps;
    addToCart: (id: number) => void;
    removeToCart: (id: number) => void;
}

const Product: React.FC<PropsProduct> = ({
    product,
    addToCart,
    removeToCart,
}) => {
    const icon = product.quantity && product.quantity < 2 ? 'delete' : 'remove';
    const bounce = product.id % 2 !== 0 ? 'bounceInLeft' : 'bounceInRight';
    const duration = product.id * 100 + 1500;
    return (
        <Container animation={`${bounce}`} duration={duration}>
            <SVG uri={product.photo} />
            <Content>
                <Name>{product.name}</Name>
                <Price>$ {product.price}</Price>
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
        </Container>
    );
};

export default Product;
