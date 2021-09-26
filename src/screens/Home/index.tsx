import React, {useCallback, useEffect, useState} from 'react';
import {View, Animated} from 'react-native';

import {useSelector, useDispatch, RootStateOrAny} from 'react-redux';

import {Load} from '../../components/Load';
import {Header} from '../../components/Header';
import {Menu} from '../../components/Menu';
import {ListItem} from './ListItem';

import creator from '../../store/ducks/listPlants';

import {Container, List} from './styles';

export const Home: React.FC = () => {
    const y = React.useRef(new Animated.Value(0)).current;
    const [optionMenu, setOptionMenu] = useState('');
    const [term, setTerm] = useState('');
    const dispatch = useDispatch();
    const [isLoading, list, listFiltered, cart] = useSelector(
        (state: RootStateOrAny) => [
            state.plants.isLoading,
            state.plants.list,
            state.plants.listFiltered,
            state.cart.cart,
        ],
    );

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(creator.search(term, optionMenu));
    }, [term]);

    useEffect(() => {
        if (term !== '' && optionMenu === '') setTerm('');
        dispatch(creator.filter(optionMenu));
    }, [optionMenu]);

    const load = useCallback(() => {
        if (isLoading) return;
        dispatch(creator.getPlants());
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    useEffect(() => load(), []);

    const handleOption = (value: string) => {
        setOptionMenu(value);
    };

    const handleTerm = (value: string) => {
        setTerm(value);
    };

    return (
        <Container>
            <Header
                back
                search
                choiceOption={(value: string) => handleTerm(value)}
            />
            <Menu
                choiceOption={(value: string) => handleOption(value)}
                totalCart={cart.length}
            />
            <List>
                {loading && <Load type="home" />}
                {!loading && (
                    <Animated.FlatList
                        onScroll={Animated.event(
                            [{nativeEvent: {contentOffset: {y: y}}}],
                            {
                                useNativeDriver: true,
                            },
                        )}
                        ListEmptyComponent={() => (
                            <View
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: '50%',
                                }}>
                                <Load type="noData" />
                            </View>
                        )}
                        data={
                            (listFiltered && term !== '') ||
                            listFiltered.length > 0
                                ? listFiltered
                                : list
                        }
                        renderItem={({item, index}) => (
                            <ListItem
                                index={index}
                                y={y}
                                plant={item}
                                cart={cart}
                            />
                        )}
                        keyExtractor={(item) => String(item.id)}
                    />
                )}
            </List>
        </Container>
    );
};
