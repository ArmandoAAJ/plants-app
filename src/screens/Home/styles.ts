import styled from 'styled-components/native';
import theme from '../../../theme.json';

export const Container = styled.View`
    flex: 1;
    background-color: ${theme.pallet.primary.color};
`;

export const List = styled.View`
    position: absolute;
    left: 30%;
    top: 120px;
    bottom: 0;
    right: 0;
    background-color: aqua;
`;
