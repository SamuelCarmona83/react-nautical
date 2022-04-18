import { combineReducers } from 'redux';
import { vueloReducer } from './vueloReducer';

const reducers = combineReducers({
    allVuelos: vueloReducer
})

export default reducers;