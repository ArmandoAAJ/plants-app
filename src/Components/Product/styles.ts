import styled from 'styled-components/native';
import {MaterialIcons} from '@expo/vector-icons';
import Theme from '../../../theme.json';
import {SvgFromUri} from 'react-native-svg';

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-around;
    height: 150px;
    background-color: ${Theme.pallet.secondary.color};
    margin: 15px 10px;
    border-radius: 5px;
`;

export const SVG = styled(SvgFromUri).attrs({
    width: 120,
    height: 150,
})``;

export const Content = styled.View`
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
`;

export const Name = styled.Text`
    font-size: ${Theme.text.large * 1.5}px;
    color: ${Theme.pallet.primary.text_color};
`;

export const CardButtons = styled.View`
    flex-direction: row;
`;

export const Actions = styled.TouchableOpacity`
    width: 25%;
    height: 50px;
    background-color: ${Theme.pallet.secondary.text_color};
    align-items: center;
    justify-content: center;
`;

export const Icon = styled(MaterialIcons).attrs({
    color: Theme.pallet.primary.text_color,
    size: 25,
})``;