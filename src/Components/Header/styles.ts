import styled from 'styled-components/native';
import {MaterialIcons} from '@expo/vector-icons';

import Theme from '../../../theme.json';

export const Container = styled.View`
    height: 100px;
    background-color: ${Theme.pallet.primary.color};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 10px 20px;
`;

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;

interface IconProps {
    padding: number;
}

export const Icon = styled(MaterialIcons).attrs({
    color: Theme.pallet.primary.text_color,
    size: 25,
})<IconProps>`
    margin-right: ${(props) => props.padding || 0}px;
`;

export const Button = styled.TouchableOpacity``;

export const TextInput = styled.TextInput.attrs({
    maxLength: 20,
    placeholderTextColor: Theme.pallet.secondary.text_color,
})`
    height: 25px;
    background-color: ${Theme.pallet.secondary.color};
    border-radius: 5px;
    padding: 0 10px;
    margin-right: 10px;
    color: ${Theme.pallet.primary.text_color};
    font-weight: 400;
    width: 70%;
`;

export const Text = styled.Text`
    text-align: center;
    font-size: ${Theme.text.large}px;
    color: ${Theme.pallet.primary.text_color};
    font-weight: bold;
`;
