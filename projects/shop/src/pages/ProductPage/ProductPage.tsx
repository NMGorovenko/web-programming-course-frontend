import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";
import {Button, Rating} from "@mui/material";
import {Product} from "../../core/models/Product";
import {BasketAction, BasketActionTypes} from "../../store/reducers/Basket/BasketTypes";
import {useParams} from "react-router";
import ProductService from "../../API/ProductService";
import AppLayout from "../../containers/AppLayout/AppLayout";
import "./style.css";
import BasketButton from "../../components/BasketButton/BasketButton";
import FeedbackList from "../../components/Feedback/FeedbackList";


const ProductPage : React.FC = () => {
    const { productId } = useParams<string>();
    const [product, setProduct] = useState<Product>(new Product({
        id : "0",
        title : "title",
        imageUrl : "url",
        price : 0,
        feedbackScore : 0}));

    const dispatch = useDispatch<Dispatch<BasketAction>>();

    const fetchProduct = async () => {
        if (typeof productId === "string") {
            try{
                const productResult = await ProductService.getProduct(productId);
                setProduct(productResult.product);
            }
            catch (e){
                alert("Error");
            }
        }
    }

    useEffect(() => {
        fetchProduct()
            .catch(console.error)
    }, [])

    const addProductInBasket = () => {
        dispatch({
            type: BasketActionTypes.ADD_TO_BASKET,
            payload: new Product({
                id : product.id,
                title : product.title,
                imageUrl : product.imageUrl,
                price : product.price,
                feedbackScore : product.feedbackScore})
        })
    };

    return (
        <>
            <BasketButton />
            <div>
                <h2>{product.title}</h2>
                <div className="product_info_container">
                    <img className="product_picture" src={product.imageUrl}/>
                    <div className="product_details">
                        <Rating name="read-only" value={product.feedbackScore} readOnly />
                        <p className="product_price">{product.price} ₽</p>
                        <button onClick={addProductInBasket} className='buy_btn'>Buy</button>
                    </div>
                </div>
                <div>
                    <FeedbackList productId={productId as string} />
                </div>
            </div>
        </>
    );
};

export default ProductPage;