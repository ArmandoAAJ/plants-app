import styled from 'styled-components/native';
import {MaterialIcons} from '@expo/vector-icons';
import {SvgFromUri} from 'react-native-svg';
import Theme from '../../../theme.json';

export const Container = styled.View`
    flex: 1;
    background-color: ${Theme.pallet.primary.color};
    padding-bottom: 20px;
    justify-content: space-between;
`;

export const Content = styled.View`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const Card = styled.TouchableOpacity`
    height: 250px;
    width: 50%;
    background-color: ${Theme.pallet.secondary.color};
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
`;

export const CardContent = styled.View`
    display: flex;
    flex-direction: row;
`;

export const Info = styled.View`
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin: 20px 0%;
`;

export const SVG = styled(SvgFromUri).attrs({
    height: '100%',
    width: '100%',
})`
    position: absolute;
    bottom: 70px;
`;

export const Collumn = styled.View`
    display: flex;
    flex-direction: column;
    margin-left: 25%;
`;

export const Row = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Details = styled.View`
    display: flex;
    flex-direction: column;
    margin: 50px 30px;
`;

interface PropsTitle {
    color?: boolean;
    size?: number;
    top?: number;
    left?: number;
}

export const Title = styled.Text<PropsTitle>`
    color: ${(props) =>
        props.color
            ? Theme.pallet.primary.text_color
            : Theme.pallet.secondary.text_color};
    font-size: ${(props) => (props.size ? props.size : Theme.text.small)}px;
    margin-top: ${(props) => props.top || 0}px;
    margin-left: ${(props) => props.left || 0}px;
    line-height: 25px;
`;

export const Button = styled.TouchableOpacity`
    width: 80%;
    height: 50px;
    margin: 0 auto;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: row;
    background-color: #6ecb7b;
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

export const ButtonAlign = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-around;
    display: flex;
    flex-direction: row;
`;
