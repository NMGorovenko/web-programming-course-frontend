import React from "react";
import ProductList from "./Products/ProductList";
import BasketButton from "./BasketButton/BasketButton";
import {Route, Routes} from "react-router";
import ProductPage from "./ProductPage/ProductPage";
import BasketPage from "./BasketPage/BasketPage";

/** Shop page. */
const ShopPage: React.FC = () => {
    return (
        <>
            <BasketButton />
            <ProductList />
        </>
    );
}

export default ShopPage;
