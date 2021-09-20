import React from 'react';

import {Container, Lottie} from './styles';

import animationHome from '../../assets/load.json';
import animationCart from '../../assets/noPlantCart.json';
import animationNoData from '../../assets/noData.json';

interface propsLoad {
    type: string;
}

export function animation(value: string) {
    if (value === 'cart') return animationCart;
    if (value === 'noData') return animationNoData;
    return animationHome;
}

export const Load: React.FC<propsLoad> = ({type}) => {
    return (
        <Container>
            <Lottie source={animation(type)} autoPlay loop={false} />
        </Container>
    );
};
