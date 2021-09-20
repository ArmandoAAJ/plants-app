import styled from 'styled-components/native';
import theme from '../../../theme.json';

export const Container = styled.View`
    flex: 1;
    background-color: #000;
`;

export const Content = styled.View`
    flex: 1;
`;

export const Text = styled.Text`
    font-size: ${theme.text.large}px;
    color: ${theme.pallet.primary.text_color};
    text-align: center;
    margin-top: 30px;
    font-weight: bold;
`;
