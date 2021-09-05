import React from 'react';

import {Header} from '../Header';
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
} from './styles';

export const Plant: React.FC = (props) => {
    return (
        <Container>
            <Header back bag />
            <Content>
                <CardContent>
                    <Card>
                        <SVG uri={props.route.params.plant.photo} />
                    </Card>
                    <Info>
                        <Collumn>
                            <Title>Watering</Title>
                            <Row>
                                <Title size={20} color>
                                    {props.route.params.plant.frequency.times}
                                </Title>
                                <Title>
                                    {' /'}
                                    {
                                        props.route.params.plant.frequency
                                            .repeat_every
                                    }
                                </Title>
                            </Row>
                        </Collumn>
                        <Collumn>
                            <Title>Height</Title>
                            <Row>
                                <Title size={20} color>
                                    {props.route.params.plant.frequency.height}
                                </Title>
                                <Title>{' /'}cm</Title>
                            </Row>
                        </Collumn>
                        <Collumn>
                            <Title>Temperature</Title>
                            <Row>
                                <Title size={20} color>
                                    {
                                        props.route.params.plant.frequency
                                            .temperature
                                    }
                                </Title>
                                <Title> {' /'}°C</Title>
                            </Row>
                        </Collumn>
                    </Info>
                </CardContent>
                <Details>
                    <Title size={25} color>
                        {props.route.params.plant.name}
                    </Title>
                    <Title top={10}>{props.route.params.plant.about}</Title>
                </Details>
            </Content>
            <Button>
                <Row style={{display: 'flex', justifyContent: 'space-around'}}>
                <Icon name="shopping-bag" />
                <Title>Add to cart</Title>
                <Title>|</Title>
                <Title>15,99</Title>
                </Row>
            </Button>
        </Container>
    );
};
