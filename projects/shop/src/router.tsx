import React from 'react';
import {Routes, Route} from "react-router";
import ShopPage from "./pages/ShopPage/ShopPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppLayout from "./containers/AppLayout/AppLayout";

const Router = () => {
    return (
        <>
            <AppLayout>
                <Routes>
                    <Route path="/product"  element={<ShopPage />}/>
                    <Route path="/product/:productId" element={<ProductPage />}/>
                </Routes>
            </AppLayout>
        </>
    );
};

export default Router;