import styled from 'styled-components/native';
import {SvgFromUri} from 'react-native-svg';
import {MaterialIcons} from '@expo/vector-icons';

import Theme from '../../../theme.json';
export const Container = styled.View``;

export const Card = styled.TouchableOpacity`
    height: 200px;
    border-radius: 25px;
    background-color: ${Theme.pallet.secondary.color};
    margin: 100px 50px 0 50px;
`;

export const SVG = styled(SvgFromUri).attrs({
    height: '100%',
    width: '100%',
})`
    position: absolute;
    top: -80px;
`;

export const Name = styled.Text`
    text-align: center;
    width: 100%;
    position: absolute;
    bottom: 55px;
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
