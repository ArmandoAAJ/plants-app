import styled from 'styled-components/native';
import {SvgFromUri} from 'react-native-svg';
import Theme from '../../../theme.json';

export const Container = styled.View`
    flex: 1;
    background-color: ${Theme.pallet.primary.color};
`;

export const Content = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 70px 0;
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
    justify-content: space-between;
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
`;

interface PropsTitle {
    color?: boolean;
    size?: number;
}

export const Title = styled.Text<PropsTitle>`
    color: ${(props) =>
        props.color
            ? Theme.pallet.primary.text_color
            : Theme.pallet.secondary.text_color};
    font-size: ${(props) => (props.size ? props.size : Theme.text.small)}px;
`;
