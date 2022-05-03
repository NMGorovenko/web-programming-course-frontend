import {BasketAction, BasketActionTypes, BasketState} from "./BasketTypes";
import {Product} from "../../../core/models/Product";

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
        case BasketActionTypes.REMOVE_FROM_BASKET:
            const indexToDel = state.products.indexOf(state.products.find(s => s.id == action.payload.id) as Product);
            const productsInBasket = [...state.products.slice(0, indexToDel), ...state.products.slice(indexToDel + 1, state.products.length)];
            console.log(indexToDel);
            console.log(productsInBasket);
            return {products: [...productsInBasket], totalSum : state.totalSum - action.payload.price, error: null}
        default:
            return state;
    }
}