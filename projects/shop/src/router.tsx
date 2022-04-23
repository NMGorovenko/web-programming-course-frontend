import React from 'react';
import {Routes, Route} from "react-router";
import ShopPage from "./pages/ShopPage/ShopPage";

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="*" element={<ShopPage />}/>
            </Routes>
        </>
    );
};

export default Router;