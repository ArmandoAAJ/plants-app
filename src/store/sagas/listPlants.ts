import {all, takeEvery, put, call, select} from 'redux-saga/effects';
import creator, {PlantTypes} from '../ducks/listPlants';

import axios from '../../config/api';

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

interface PropsFilter {
    option: String;
}

export interface PropsState {
    plants: {
        list: [
            {
                id: Number;
                name: String;
                abount: String;
                water_tips: String;
                photo: String;
                environments: [String];
                frequency: {
                    watering: Number;
                    repeat_every: String;
                    height: String;
                    temperature: Number;
                };
            },
        ];
    };
}

export function* FILTER({option}: PropsFilter) {
    yield put(creator.setState({isLoading: true}));
    try {
        const data: PropsState = yield select((state) => state);

        if (option.length < 1) {
            yield put(creator.setState({listFiltered: []}));
            return;
        }
        const newArray = data.plants.list.filter((p) => {
            const [a, b] = p.environments.map((e) => {
                if (e === option) {
                    return p;
                }
            });
            if (!!b) return b;
            if (!!a) return a;
        });

        yield put(creator.setState({listFiltered: newArray}));
    } catch (e) {
        console.log(e);
    } finally {
        yield put(creator.setState({isLoading: false}));
    }
}

export default function* rootSaga() {
    yield all([
        takeEvery(PlantTypes.GET_PLANTS, GET_PLANTS),
        takeEvery(PlantTypes.FILTER, FILTER),
    ]);
}
