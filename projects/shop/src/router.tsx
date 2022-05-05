import React from 'react';
import {Routes, Route} from "react-router";
import ShopPage from "./pages/ShopPage/ShopPage";
import AppLayout from "./containers/AppLayout/AppLayout";
import ProductPage from "./pages/ShopPage/ProductPage/ProductPage";
import BasketPage from "./pages/ShopPage/BasketPage/BasketPage";
import ChatPage from "./pages/ChatPage/ChatPage";
import ChatRoom from "./pages/ChatPage/ChatRoomPage/ChatRoom";

/** Main router. */
const Router = () => {
    return (
        <>
            <AppLayout>
                <Routes>
                    <Route path="product/"  element={<ShopPage />}/>
                    <Route path="product/:productId/" element={<ProductPage />}/>
                    <Route path="basket/" element={<BasketPage />}/>
                    <Route path="chat/" element={<ChatPage />}/>
                    <Route path="chat/:roomId" element={<ChatRoom />}/>
                </Routes>
            </AppLayout>
        </>
    );
};

export default Router;
