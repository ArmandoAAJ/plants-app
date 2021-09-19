import React, {useCallback, useEffect, useState} from 'react';
import {
    Container,
    SVG,
    Content,
    Name,
    CardButtons,
    Actions,
    Icon,
} from './styles';

const Product: React.FC = ({item, addToCart, removeToCart}) => {
    return (
        <Container>
            <SVG uri={item.photo} />
            <Content>
                <Name>{item.name}</Name>
                <CardButtons>
                    <Actions
                        onPress={() => addToCart(5)}
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
                        onPress={removeToCart}
                        style={{
                            borderTopRightRadius: 5,
                            borderBottomRightRadius: 5,
                        }}>
                        <Icon name="remove" />
                    </Actions>
                </CardButtons>
            </Content>
        </Container>
    );
};

export default Product;
