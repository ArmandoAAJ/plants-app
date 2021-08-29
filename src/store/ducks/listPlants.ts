import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions(
  {
    setState: ["payload"],
  },
);

export const PlantList = Types;
export default Creators;

/* Initial State */
export const INITIAL_STATE = Immutable({
  isLoading: false,
  list: [],
});

/* Reducers */

// export const reducer = state =>
//   state.merge({ data: [] });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_STATE]: (state, { payload }) =>
    state.merge(payload, { deep: true }),
});
