import React from 'react';

import creatorCart from '../../store/ducks/cart';
import {useDispatch, useSelector, RootStateOrAny} from 'react-redux';

import {Header} from '../../components/Header';

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
    const [cart] = useSelector((state: RootStateOrAny) => [state.cart.cart]);

    const dispatch = useDispatch();
    const {plant}: Plant = route.params;

    const plantCart = cart.find((p: PlantProps) => p.id === plant.id);

    function handleAddToCart(value: number) {
        dispatch(creatorCart.addCart(value));
    }

    return (
        <Container>
            <Header back bag />
            <Content>
                <CardContent>
                    <Card onPress={() => handleAddToCart(plant.id)}>
                        <SVG uri={plant.photo} />
                    </Card>
                    <Info>
                        <Collumn>
                            <Title bold="bold">Watering</Title>
                            <Row>
                                <Title bold="bold" size={22} color>
                                    {plant.frequency.times}
                                </Title>
                                <Title bold="bold">
                                    {' /'}
                                    {plant.frequency.repeat_every}
                                </Title>
                            </Row>
                        </Collumn>
                        <Collumn>
                            <Title bold="bold">Height</Title>
                            <Row>
                                <Title bold="bold" size={22} color>
                                    {plant.frequency.height}
                                </Title>
                                <Title bold="bold">{' /'}cm</Title>
                            </Row>
                        </Collumn>
                        <Collumn>
                            <Title bold="bold">Temperature</Title>
                            <Row>
                                <Title bold="bold" size={22} color>
                                    {plant.frequency.temperature}
                                </Title>
                                <Title bold="bold"> {' /'}°C</Title>
                            </Row>
                        </Collumn>
                    </Info>
                </CardContent>
                <Details>
                    <Title size={25} color>
                        {plant.name}
                    </Title>
                    <Title bold="bold" top={10}>
                        {plant.about}
                    </Title>
                </Details>
            </Content>
            <Button onPress={() => handleAddToCart(plant.id)}>
                <ButtonAlign>
                    <Row>
                        {plantCart?.quantity ? (
                            <Title color size={18} left={5}>
                                {`${plantCart?.quantity}`}
                            </Title>
                        ) : (
                            <>
                                <Icon name="shopping-bag" />
                                <Title color size={18} left={5}>
                                    Adicionar ao Carrinho
                                </Title>
                            </>
                        )}
                    </Row>
                    <Title color size={30}>
                        |
                    </Title>
                    <Title color size={18}>
                        {plant.price.toLocaleString('pt-BR', {
                            minimumFractionDigits: 2,
                            style: 'currency',
                            currency: 'BRL',
                        })}
                    </Title>
                </ButtonAlign>
            </Button>
        </Container>
    );
};
