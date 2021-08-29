import { all, takeEvery, put, call, select } from "redux-saga/effects";
import axios from "../../config/api";
import creator, { PlantList } from "../ducks/listPlants";

export function* GET_LIST() {
  yield put(creator.setState({ isLoading: true }));
  try {
    const { data } = yield call(axios.get, "plants");
    if (data && Array.isArray(data)) {
      yield put(
        creator.setState({ list: data.length > 0 ? data[0].listas : [] })
      );
    }
  } catch (e) {
    console.log(e);
  } finally {
    yield put(creator.setState({ isLoading: false }));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(PlantList.GET_LIST, GET_LIST)]);
}
