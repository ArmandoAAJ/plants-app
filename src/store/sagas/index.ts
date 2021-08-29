import { all } from "redux-saga/effects";

import plants from "./listPlants";

export default function* rootSaga() {
  yield all([plants()]);
}
