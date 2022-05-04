import {Product} from "../../../core/models/Product";

/** Products action types. */
export enum ProductsActionTypes {
    FETCH_PRODUCTS = 'FETCH_PRODUCTS',
    FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR',
    FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
}

/** Products state */
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

/** Products actions. */
export type ProductsAction =  FetchProductsAction |
    FetchProductsErrorAction |
    FetchProductsSuccessAction;
