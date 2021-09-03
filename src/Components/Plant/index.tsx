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
    Details
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
                    <Details>
                        <Title>{props.route.params.plant.name}</Title>
                    </Details>
                </CardContent>
            </Content>
        </Container>
    );
};
