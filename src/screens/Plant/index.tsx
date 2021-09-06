import React from 'react';
import {NavigatorScreenParams} from '@react-navigation/native';

import {Header} from '../../Components/Header';

import {PlantProps} from '../../config/types';

import {
    Container,
    Content,
    CardContent,
    Card,
    SVG,
    Info,
    Collumn,
    Row,
    Title,
    Details,
    Button,
    Icon,
    ButtonAlign,
} from './styles';

interface Plant {
    plant: PlantProps;
}

export const Plant = ({route}: any) => {
    const {plant}: Plant = route.params;

    return (
        <Container>
            <Header back bag />
            <Content>
                <CardContent>
                    <Card>
                        <SVG uri={plant.photo} />
                    </Card>
                    <Info>
                        <Collumn>
                            <Title>Watering</Title>
                            <Row>
                                <Title size={20} color>
                                    {plant.frequency.times}
                                </Title>
                                <Title>
                                    {' /'}
                                    {plant.frequency.repeat_every}
                                </Title>
                            </Row>
                        </Collumn>
                        <Collumn>
                            <Title>Height</Title>
                            <Row>
                                <Title size={20} color>
                                    {plant.frequency.height}
                                </Title>
                                <Title>{' /'}cm</Title>
                            </Row>
                        </Collumn>
                        <Collumn>
                            <Title>Temperature</Title>
                            <Row>
                                <Title size={20} color>
                                    {plant.frequency.temperature}
                                </Title>
                                <Title> {' /'}°C</Title>
                            </Row>
                        </Collumn>
                    </Info>
                </CardContent>
                <Details>
                    <Title size={25} color>
                        {plant.name}
                    </Title>
                    <Title top={10}>{plant.about}</Title>
                </Details>
            </Content>
            <Button>
                <ButtonAlign>
                    <Row>
                        <Icon name="shopping-bag" />
                        <Title color size={18} left={5}>
                            Add to cart
                        </Title>
                    </Row>
                    <Title color size={30}>
                        |
                    </Title>
                    <Title color size={18}>
                        ${plant.price}
                    </Title>
                </ButtonAlign>
            </Button>
        </Container>
    );
};
