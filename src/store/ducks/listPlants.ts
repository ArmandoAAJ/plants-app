import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const {Types, Creators} = createActions({
    setState: ['payload'],
    getPlants: [],
    filter: ['option']
});

export const PlantTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
    list: [
        {
            id: Number,
            name: String,
            abount: String,
            water_tips: String,
            photo: String,
            environments: [String],
            frequency: {
                watering: Number,
                repeat_every: String,
                height: String,
                temperature: Number,
            },
        },
    ],
    listFiltered: [
        {
            id: Number,
            name: String,
            abount: String,
            water_tips: String,
            photo: String,
            environments: [String],
            frequency: {
                watering: Number,
                repeat_every: String,
                height: String,
                temperature: Number,
            },
        },
    ],
    isLoading: false,
});

/* Reducers */

// export const reducer = state =>
//	 state.merge({ data: [] });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.SET_STATE]: (state, {payload}) => state.merge(payload, {deep: true}),
});
