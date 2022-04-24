import {combineReducers} from "redux";
import {basketReducer} from "./Basket/BasketReducer";
import {productsReducer} from "./Product/ProductsReducer";
import {authReducer} from "./Auth/AuthReducer";

export const rootReducer = combineReducers({
    basket: basketReducer,
    products: productsReducer,
    auth: authReducer,
})

export type RootState = ReturnType<typeof  rootReducer>