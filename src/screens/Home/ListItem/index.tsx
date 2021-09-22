import React from 'react';
import {Dimensions, Animated} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Container, Card, Name, AddToCart, SVG, Icon} from './styles';

import {PlantProps} from '../../../config/types';

interface PropsItem {
    plant: PlantProps;
    addToCart: (id: number) => void;
    y: Animated.Value;
    index: number;
}

export const ListItem = ({plant, addToCart, index, y}: PropsItem) => {
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
            outputRange: [0, -CARD_HEIGHT / 3],
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

    return (
        <Container
            style={[
                {
                    opacity,
                    transform: [{translateY}, {scale}],
                    height: height / 2.5,
                    width: (60 / 100) * width,
                },
            ]}
            key={index}>
            <Card
                style={{height: height / 2.5, width: (60 / 100) * width}}
                onPress={() => navigation.navigate('Plant', {plant})}>
                <SVG uri={plant.photo} />
                <Name>{plant.name}</Name>
            </Card>
        </Container>
    );
};
