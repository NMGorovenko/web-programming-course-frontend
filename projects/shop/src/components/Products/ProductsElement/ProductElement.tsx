import React from 'react';
import './ProductItem.css'
import {Product} from "../../../core/models/Product";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {BasketAction, BasketActionTypes} from "../../../store/reducers/Basket/BasketTypes";
import {Dispatch} from "redux";

interface ProductElementProps {
    product: Product;
}

const ProductElement: React.FC<ProductElementProps> = props => {
    const {
        product: {id, title, imageUrl, price, feedbackScore}
    } = props;

    const {products, totalSum} = useTypedSelector(state => state.basket)

    const dispatch = useDispatch<Dispatch<BasketAction>>();

    const addProductInBasket = () => {
        dispatch({
            type: BasketActionTypes.ADD_TO_BASKET, payload: new Product({id, title, imageUrl, price, feedbackScore})
        })
    };

        return (
            <div className='product_item'>
                <div className='product_header'>
                    <div className='product_title'>
                        <a href='#'>{props.product.title} </a>
                    </div>
                    <div className='score'>
                        {props.product.feedbackScore.toFixed(2)}/{Product.maxScore}
                    </div>
                </div>
                <a href='#'>
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