import {Product} from "../../../core/models/Product";

export enum BasketActionTypes {
    ADD_TO_BASKET = 'ADD_TO_BASKET'
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

export type BasketAction = AddToBasket;