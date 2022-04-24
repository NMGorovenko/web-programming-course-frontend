import React, {useEffect, useState} from "react";
import Products from "../../components/Products/Products";
import AppLayout from "../../containers/AppLayout/AppLayout";
import BasketButton from "../../components/BasketButton/BasketButton";
import {useDispatch} from "react-redux";
import {AppDispatch, useAppDispatch, useTypedSelector} from "../../hooks/useTypedSelector";
import {fetchProducts} from "../../store/action-creators/product";


const ShopPage: React.FC = () => {
    return (
        <>
            <AppLayout>

                <div className="App">
                    <BasketButton />
                    <Products />
                </div>
            </AppLayout>
        </>
    );
}

export default ShopPage;
