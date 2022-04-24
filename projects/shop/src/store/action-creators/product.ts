import {ProductsAction, ProductsActionTypes} from "../reducers/Product/ProductsTypes";
import {Dispatch} from "redux";
import ProductService from "../../API/ProductService";

export const fetchProducts = (page: number, pageSize: number) => {
    return async (dispatch : Dispatch<ProductsAction>) : Promise<void> => {
        try {
            dispatch({
                type: ProductsActionTypes.FETCH_PRODUCTS
            });
            const productsPageResult = await ProductService.getAll(page, pageSize);
            dispatch({
                type : ProductsActionTypes.FETCH_PRODUCTS_SUCCESS,
                payload : {
                    products : productsPageResult.products,
                    page : productsPageResult.page,
                    pageSize : productsPageResult.pageSize,
                    totalPages : productsPageResult.totalPages
                }
            })
        } catch (e) {
            dispatch({
                type: ProductsActionTypes.FETCH_PRODUCTS_ERROR,
                payload: 'fetch error products',
            })
        }
    }
}