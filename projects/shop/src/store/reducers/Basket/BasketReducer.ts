import {BasketAction, BasketActionTypes, BasketState} from "./BasketTypes";

const initialState : BasketState = {
    products : [],
    totalSum : 0,
    error: null
}

export const basketReducer = (state = initialState, action : BasketAction) : BasketState => {
    switch (action.type){
        case BasketActionTypes.ADD_TO_BASKET:
            const totalSum : number = state.totalSum + action.payload.price;
            return {products : [...state.products, action.payload], totalSum:  totalSum, error: null}
        default:
            return state;
    }
}