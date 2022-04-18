import { ActionTypes } from "../constans/actions-types"

const initialState = {
    vuelos: []
}

export const vueloReducer = (state = initialState, {type, payload}) => {

    switch (type){
        case ActionTypes.SET_VUELOS:
            return {...state, vuelos: payload };
        default:
            return state;
    }
}