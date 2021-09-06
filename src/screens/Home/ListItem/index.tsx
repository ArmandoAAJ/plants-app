import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Container, Card, Name, AddToCart, SVG, Icon} from './styles';

import {PlantProps} from '../../../config/types';

interface PropsItem {
    plant: PlantProps;
}

export const ListItem = ({plant}: PropsItem) => {
    const navigation = useNavigation();
    return (
        <Container>
            <Card onPress={() => navigation.navigate('Plant', {plant})}>
                <SVG uri={plant.photo} />
                <Name>{plant.name}</Name>
            </Card>
            <AddToCart>
                <Icon name="shopping-bag" />
            </AddToCart>
        </Container>
    );
};
