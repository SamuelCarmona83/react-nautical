import { ActionTypes  } from "../constans/actions-types"

export const setVuelos = (vuelos) => {
    return {
        type: ActionTypes.SET_VUELOS,
        payload: vuelos,
    };
};

export const selectedVuelos = (vuelo) => {
    return {
        type: ActionTypes.SELECTED_VUELO,
        payload: vuelo,
    };
};

