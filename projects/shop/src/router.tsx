import React from 'react';
import {Routes, Route} from "react-router";
import ShopPage from "./pages/ShopPage/ShopPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import AppLayout from "./containers/AppLayout/AppLayout";
import BasketPage from "./pages/BasketPage/BasketPage";

const Router = () => {
    return (
        <>
            <AppLayout>
                <Routes>
                    <Route path="/product"  element={<ShopPage />}/>
                    <Route path="/product/:productId" element={<ProductPage />}/>
                    <Route path="/basket" element={<BasketPage />}/>
                </Routes>
            </AppLayout>
        </>
    );
};

export default Router;