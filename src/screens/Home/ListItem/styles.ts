import styled from 'styled-components/native';
import {Animated} from 'react-native';
import {SvgFromUri} from 'react-native-svg';
import {MaterialIcons} from '@expo/vector-icons';

import Theme from '../../../../theme.json';

export const Container = styled(Animated.View)`
    border-radius: 25px;
    background-color: ${Theme.pallet.secondary.color};
    align-self: center;
    margin-vertical: 15px;
    align-items: center;
`;

export const Card = styled.TouchableOpacity``;

export const SVG = styled(SvgFromUri).attrs({
    height: '60%',
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
