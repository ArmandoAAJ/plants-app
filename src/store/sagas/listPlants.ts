import {all, takeEvery, put, call, select} from 'redux-saga/effects';
import creator, {PlantTypes} from '../ducks/listPlants';

import axios from '../../config/api';

interface Plant {
    id: number;
    name: string;
    abount: string;
    water_tips: string;
    photo: string;
    environments: [string];
    frequency: {
        watering: number;
        repeat_every: string;
        height: string;
        temperature: number;
    };
}

export function* GET_PLANTS() {
    yield put(creator.setState({isLoading: true}));
    try {
        const {data} = yield call(axios, 'plants');

        yield put(creator.setState({list: data}));
    } catch (e) {
        console.log(e);
    } finally {
        yield put(creator.setState({isLoading: false}));
    }
}

export default function* rootSaga() {
    yield all([takeEvery(PlantTypes.GET_PLANTS, GET_PLANTS)]);
}
