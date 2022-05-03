import React, {useEffect, useState} from "react";
import Products from "../../components/Products/Products";
import BasketButton from "../../components/BasketButton/BasketButton";

const ShopPage: React.FC = () => {
    return (
        <>
            <div className="App">
                <BasketButton />
                <Products />
            </div>
        </>
    );
}

export default ShopPage;
