import styled from 'styled-components/native';
import {Animated} from 'react-native';
import {SvgFromUri} from 'react-native-svg';
import {MaterialIcons} from '@expo/vector-icons';

import Theme from '../../../../theme.json';

export const Container = styled(Animated.View)`
    border-radius: 15px;
    background-color: ${Theme.pallet.secondary.color};
    align-self: center;
`;

export const Card = styled.TouchableOpacity`
    align-items: flex-start;
    justify-content: space-around;
    padding-bottom: 50px;
`;

export const SVG = styled(SvgFromUri).attrs({
    height: '90%',
    width: '100%',
})``;

export const Name = styled.Text`
    text-align: center;
    width: 100%;
    color: ${Theme.pallet.primary.text_color};
    font-weight: bold;
    font-size: ${Theme.text.large}px;
`;

export const AddToCart = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    margin: 0 auto;
    margin-top: -35px;
    border-radius: 20px;
    background-color: ${Theme.pallet.primary.text_color};
`;

export const Icon = styled(MaterialIcons).attrs({
    color: Theme.pallet.secondary.text_color,
    size: 30,
})``;

export const Price = styled.Text`
    font-size: ${Theme.text.normal}px;
    color: ${Theme.pallet.primary.text_color};
    font-weight: bold;
    width: 100%;
    text-align: right;
    position: absolute;
    right: 15px;
    top: 15px;
    z-index: 9999;
`;
