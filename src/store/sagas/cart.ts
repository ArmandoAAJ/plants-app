import {all, takeEvery, put, call, select} from 'redux-saga/effects';
import creator, {CartTypes} from '../ducks/cart';

import {PlantProps} from '../../config/types';

import api from '../../config/api';

export function* GET_CART() {
    yield put(creator.setState({isLoading: true}));
    try {
        const {cart} = yield select((state) => state.cart);
        yield put(creator.setState({cart: cart}));
    } catch (e) {
        console.log(e);
    } finally {
        yield put(creator.setState({isLoading: false}));
    }
}

export function addNewProduct({id, list, cart}) {
    let [product] = list.filter((p) => p.id === id);

    if (cart.length < 1) {
        return [
            {
                ...product,
                quantity: 1,
            },
        ];
    }

    const inCart = cart.findIndex((c) => c.id === id);
    console.log('saiugdiuasgdiuasgdiuasgdiasgdiuasgdiuasd', inCart);
    if (inCart < 0) {
        let newCart = [];
        newCart = [...cart, {...product, quantity: 1}];
        return newCart;
    }

    let newCart = [];
    [newCart] = cart;
    console.log(newCart)

    return [newCart];
}

export function* ADD_CART({id}) {
    yield put(creator.setState({isLoading: true}));
    try {
        const {list} = yield select((state) => state.plants);
        const {cart} = yield select((state) => state.cart);
        if (list.length < 1) return;

        const newCart = addNewProduct({id, list, cart});

        yield put(creator.setState({cart: newCart}));

        console.log(cart);
    } catch (e) {
        console.log(e);
    } finally {
        yield put(creator.setState({isLoading: false}));
    }
}

export default function* rootSaga() {
    yield all([takeEvery(CartTypes.GET_CART, GET_CART)]);
    yield all([takeEvery(CartTypes.ADD_CART, ADD_CART)]);
}
