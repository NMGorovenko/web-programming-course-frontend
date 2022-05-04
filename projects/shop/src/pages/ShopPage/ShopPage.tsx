import React from "react";
import ProductList from "./ProductPage/Products/ProductList";
import BasketButton from "./BasketButton/BasketButton";

/** Shop page. */
const ShopPage: React.FC = () => {
    return (
        <>
            <div className="App">
                <BasketButton />
                <ProductList />
            </div>
        </>
    );
}

export default ShopPage;
