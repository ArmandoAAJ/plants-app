import React from 'react';

import {Header} from '../../Components/Header';
import Product from '../../Components/Product';

import {Container} from './styles';

export const Cart: React.FC = () => {
    return (
        <Container>
            <Header back title="My Cart" />
            <Product/>
        </Container>
    );
};
