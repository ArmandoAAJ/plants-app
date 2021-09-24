import React from 'react';
import {Dimensions, Animated} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import creatorCart from '../../../store/ducks/cart';

import {Container, Card, Name, AddToCart, SVG, Icon, Price} from './styles';

import {PlantProps} from '../../../config/types';

interface PropsItem {
    plant: PlantProps;
    y: Animated.Value;
    index: number;
}

export const ListItem = ({plant, index, y}: PropsItem) => {
    console.log(y);
    const dispatch = useDispatch();
    const {height: wHeight, width} = Dimensions.get('window');
    const height = wHeight - 64;
    const MARGIN = 16;
    const CARD_HEIGHT = height / 2.5 + MARGIN * 2;
    const navigation = useNavigation();

    const position = Animated.subtract(index * CARD_HEIGHT, y);
    const isDisappearing = -CARD_HEIGHT;
    const isTop = 0;
    const isBottom = height - CARD_HEIGHT;
    const isAppearing = height;

    const translateY = Animated.add(
        Animated.add(
            y,
            y.interpolate({
                inputRange: [0, 0.00001 + index * CARD_HEIGHT],
                outputRange: [0, -index * CARD_HEIGHT],
                extrapolateRight: 'clamp',
            }),
        ),
        position.interpolate({
            inputRange: [isBottom, isAppearing],
            outputRange: [0, -CARD_HEIGHT / 2.5 + MARGIN],
            extrapolate: 'clamp',
        }),
    );
    const scale = position.interpolate({
        inputRange: [isDisappearing, isTop, isBottom, isAppearing],
        outputRange: [0, 1, 1, 0],
        extrapolate: 'clamp',
    });
    const opacity = position.interpolate({
        inputRange: [isDisappearing, isTop, isBottom, isAppearing],
        outputRange: [0, 1, 1, 0],
    });

    const handleAddToCart = (value: number) => {
        dispatch(creatorCart.addCart(value));
    };

    return (
        <Container
            style={[
                {
                    marginBottom: 45,
                    opacity,
                    transform: [{translateY}, {scale}],
                    height: height / 2.5 - MARGIN,
                    width: (60 / 100) * width,
                },
            ]}
            key={index}>
            <Card
                style={{
                    height: height / 2.5 - MARGIN,
                    width: (60 / 100) * width,
                }}
                onPress={() => navigation.navigate('Plant', {plant})}>
                <SVG uri={plant.photo} />
                <Name>{plant.name}</Name>
                <Price>
                    {plant.price.toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                        style: 'currency',
                        currency: 'BRL',
                    })}
                </Price>
            </Card>
            <AddToCart onPress={() => handleAddToCart(plant.id)}>
                <Icon name="add" />
            </AddToCart>
        </Container>
    );
};
