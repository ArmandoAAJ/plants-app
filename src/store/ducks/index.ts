import { combineReducers } from "redux";
import { reducer as plants } from "./listPlants";

const reducers = combineReducers({
  plants,
});

export default reducers;
