import React from 'react';

import {Container, Card, Name, AddToCart, SVG, Icon} from './styles';

interface ListProps {
    plant: {
        id: Number;
        name: String;
        abount: String;
        water_tips: String;
        photo: String;
        environments: [String];
        frequency: {
            watering: Number;
            repeat_every: String;
            height: String;
            temperature: Number;
        };
    };
}

export const ListItem = ({plant}: ListProps) => {
    return (
        <Container>
            <Card>
                <SVG uri={plant.photo} />
                <Name>{plant.name}</Name>
            </Card>
            <AddToCart>
                <Icon name="shopping-bag" />
            </AddToCart>
        </Container>
    );
};
