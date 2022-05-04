import {Product} from "../../../core/models/Product";

/** Basket action types. */
export enum BasketActionTypes {
    ADD_TO_BASKET = 'ADD_TO_BASKET',
    REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET'
}

/** Basket state. */
export interface BasketState {
    products : Product[];
    totalSum : number;
    error : null | string;
}

interface AddToBasket {
    type: BasketActionTypes.ADD_TO_BASKET;
    payload: Product
}

interface RemoveFromBasket {
    type: BasketActionTypes.REMOVE_FROM_BASKET;
    payload: Product
}

/** Basket actions for basket reducer. */
export type BasketAction = AddToBasket | RemoveFromBasket;
