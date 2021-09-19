import {combineReducers} from 'redux';
import {reducer as plants} from './listPlants';
import {reducer as cart} from './cart';

const reducers = combineReducers({
    plants,
    cart,
});

export default reducers;
