import {all} from 'redux-saga/effects';
import plants from './listPlants';
import cart from './cart';

export default function* rootSaga() {
    yield all([plants(), cart()]);
}
