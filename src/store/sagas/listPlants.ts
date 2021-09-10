import {all, takeEvery, put, call, select} from 'redux-saga/effects';
import creator, {PlantTypes} from '../ducks/listPlants';

import {PlantProps} from '../../config/types';

import api from '../../config/api';

export function* GET_PLANTS() {
    yield put(creator.setState({isLoading: true}));
    try {
        const {data} = yield call(api, 'plants');
        yield put(creator.setState({list: data}));
    } catch (e) {
        console.log(e);
    } finally {
        yield put(creator.setState({isLoading: false}));
    }
}

type Params = {option: string; term: string};

export function* FILTER({option}: Params) {
    yield put(creator.setState({isLoading: true}));

    try {
        const {plants} = yield select((state) => state);

        if (option.length < 1) {
            yield put(creator.setState({listFiltered: []}));
            return;
        }
        const newArray = plants.list.filter((p: PlantProps) => {
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

export function* SEARCH({term}: Params) {
    yield put(creator.setState({isLoading: true}));

    try {
        if (term.length < 1) {
            yield put(creator.setState({listFiltered: []}));
            return;
        }
        const {data} = yield call(api, `plants?name_like=${term}`);

        yield put(creator.setState({listFiltered: data}));
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
        takeEvery(PlantTypes.SEARCH, SEARCH),
    ]);
}
