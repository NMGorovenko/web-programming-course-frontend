import {combineReducers} from "redux";
import {basketReducer} from "./Basket/BasketReducer";
import {productsReducer} from "./Product/ProductsReducer";

export const rootReducer = combineReducers({
    basket: basketReducer,
    products: productsReducer
})

export type RootState = ReturnType<typeof  rootReducer>