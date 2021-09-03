import React from 'react';

import {Container, Card, Name, AddToCart, SVG, Icon} from './styles';

import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
    Plant: {
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
    };
};

type ProfileScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Plant'
>;

type Props = {
    navigation: ProfileScreenNavigationProp;
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
};

export const ListItem = ({plant, navigation}: Props) => {
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
