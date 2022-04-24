import {Product} from "../../../core/models/Product";

export enum ProductsActionTypes {
    FETCH_PRODUCTS = 'FETCH_PRODUCTS',
    FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR',
    FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
}

export interface ProductsState {
    products : Product[];
    page : number;
    pageSize : number;
    totalPages : number;
    loading: boolean;
    error : null | string;
}

interface FetchProductsAction {
    type: ProductsActionTypes.FETCH_PRODUCTS;
}

interface FetchProductsErrorAction {
    type: ProductsActionTypes.FETCH_PRODUCTS_ERROR;
    payload: string
}

interface FetchProductsSuccessAction {
    type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS;
    payload: {
        products : Product[],
        page : number,
        pageSize : number,
        totalPages : number,
    }
}

export type ProductsAction =  FetchProductsAction |
    FetchProductsErrorAction |
    FetchProductsSuccessAction;