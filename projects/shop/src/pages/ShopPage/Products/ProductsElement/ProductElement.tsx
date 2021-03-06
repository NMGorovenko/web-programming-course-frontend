import React from 'react';
import './ProductItem.css'
import {Product} from "../../../../core/models/Product";
import {useDispatch} from "react-redux";
import {BasketAction, BasketActionTypes} from "../../../../store/reducers/Basket/BasketTypes";
import {Dispatch} from "redux";
import { Link } from 'react-router-dom';
import {Rating} from "@mui/material";

interface ProductElementProps {
    product: Product;
}

/** Product element. */
const ProductElement: React.FC<ProductElementProps> = props => {
    const {
        product: {id, title, imageUrl, price, feedbackScore}
    } = props;

    const dispatch = useDispatch<Dispatch<BasketAction>>();

    const addProductInBasket = () => {
        dispatch({
            type: BasketActionTypes.ADD_TO_BASKET,
            payload: new Product({id, title, imageUrl, price, feedbackScore})
        })
    };

    return (
        <div className='product_item'>
            <div className='product_header'>
                <div className='product_title'>
                    <Link to={id}>{title}</Link>
                </div>
                <div className='score'>
                    <Rating name="read-only" value={feedbackScore} readOnly />
                </div>
            </div>
            <a href='src/pages/ShopPage/Products/ProductsElement/ProductElement#'>
                <img className='product_img'
                     src={props.product.imageUrl}
                     alt='https://bugulma.1sota.ru/images/no_photo.png'/>
            </a>
            <div className='product_footer'>
                <div className='product_price'>
                    {props.product.price} ₽
                </div>
                <div className='product_buy'>
                    <button onClick={addProductInBasket} className='buy_btn'>Buy</button>
                </div>
            </div>
        </div>
    );
};

export default ProductElement;
