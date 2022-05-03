import {Product} from "../../../core/models/Product";

export enum BasketActionTypes {
    ADD_TO_BASKET = 'ADD_TO_BASKET',
    REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET'
}

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

export type BasketAction = AddToBasket | RemoveFromBasket;