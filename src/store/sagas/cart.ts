import {all, takeEvery, put, call, select} from 'redux-saga/effects';
import creator, {CartTypes} from '../ducks/cart';

import {PlantProps} from '../../config/types';

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

interface PropsAddNewProduct {
    id: number;
    list: [PlantProps];
    cart: [PlantProps];
}

export function addNewProduct({id, list, cart}: PropsAddNewProduct) {
    let [product] = list.filter((p) => p.id === id);

    if (cart.length < 1) {
        return [
            {
                ...product,
                quantity: 1,
            },
        ];
    }

    const existProduct = cart.findIndex((c) => c.id === id);

    if (existProduct === -1) {
        product = {
            ...product,
            quantity: 1,
        };
        const newCart = [...cart, {...product, quantity: 1}];
        return newCart;
    }

    const newCart = cart.map((i, index) => {
        if (index === existProduct) {
            return {
                ...i,
                quantity: i.quantity && i.quantity + 1,
            };
        }

        return i;
    });
    return newCart;
}

export function* ADD_CART({id}) {
    yield put(creator.setState({isLoading: true}));
    try {
        const {list} = yield select((state) => state.plants);
        const {cart} = yield select((state) => state.cart);
        if (list.length < 1) return;

        const newCart = addNewProduct({id, list, cart});

        yield put(creator.setState({cart: newCart}));

    } catch (e) {
        console.log(e);
    } finally {
        yield put(creator.setState({isLoading: false}));
    }
}

export function removeProduct({id, cart}) {
    let [product] = cart.filter((cart) => cart.id === id && cart.quantity > 1);

    if (product) {
        const newCart = cart.map((i) => {
            if (i.id === id) {
                return {
                    ...i,
                    quantity: i.quantity - 1,
                };
            }
            return i;
        });
        return newCart;
    }

    const newCart = cart.filter((i) => i.id !== id);
    return newCart;
}

export function* REMOVE_CART({id}) {
    yield put(creator.setState({isLoading: true}));
    try {
        const {list} = yield select((state) => state.plants);
        const {cart} = yield select((state) => state.cart);
        if (list.length < 1) return;

        const newCart = removeProduct({id, cart});

        yield put(creator.setState({cart: newCart}));

    } catch (e) {
        console.log(e);
    } finally {
        yield put(creator.setState({isLoading: false}));
    }
}

export default function* rootSaga() {
    yield all([takeEvery(CartTypes.GET_CART, GET_CART)]);
    yield all([takeEvery(CartTypes.ADD_CART, ADD_CART)]);
    yield all([takeEvery(CartTypes.REMOVE_CART, REMOVE_CART)]);
}
