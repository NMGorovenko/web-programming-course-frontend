import {ProductsAction, ProductsActionTypes, ProductsState} from "./ProductsTypes";
import products from "../../../pages/ShopPage/ProductPage/Products/ProductList";


const initialState : ProductsState = {
    products : [],
    page : 1,
    pageSize : 12,
    totalPages : 0,
    loading : true,
    error : null
}

/** Products reducer. */
export const productsReducer = (state = initialState, action : ProductsAction) : ProductsState => {
    switch (action.type){
        case ProductsActionTypes.FETCH_PRODUCTS:
            return {
                ...state,
                loading : true,
            };
        case ProductsActionTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                products : action.payload.products,
                page : action.payload.page,
                pageSize : action.payload.pageSize,
                totalPages: action.payload.totalPages,
                loading : false,
                error : null,
            }
        case ProductsActionTypes.FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                loading : false,
                error : action.payload,
            }
        default:
            return state;
    }
}
