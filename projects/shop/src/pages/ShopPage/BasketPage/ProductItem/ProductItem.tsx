import React from 'react';
import { Product } from "../../../../core/models/Product";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import "./ProductItem.css"
import { useAppDispatch } from "../../../../hooks/useTypedSelector";
import { BasketActionTypes } from "../../../../store/reducers/Basket/BasketTypes";

interface IProps {
    product: Product;
    amount: number;
}

/** Product item in basket page. */
const ProductItem : React.FC<IProps> = props => {
    const {
        product: {id, title, imageUrl, price, feedbackScore}
    } = props;
    const { amount } = props;

    const dispatch = useAppDispatch();

    const removeProduct = () => {
        dispatch({
            type: BasketActionTypes.REMOVE_FROM_BASKET,
            payload: new Product({id, title, imageUrl, price, feedbackScore})
        })
    }

    return (
        <div className="basket_product_item">
            <div className="basket_product_item__product_item__img">
                <img className='basket_product_item__product_item__img__product_img'
                     src={props.product.imageUrl}
                     alt='https://bugulma.1sota.ru/images/no_photo.png'/>
            </div>
            <div className="product_item__title">
                <Link to={"/product/" + id}>{title}</Link>
            </div>
            <div className="product_item__price">
                {price} ₽
            </div>
            <div className="product_item__amount">
                amount:{amount}
            </div>
            <div className="product_item__amount">
                total:{amount * price} ₽
            </div>
            <div className="product_item__amount">
                <IconButton onClick={removeProduct}>
                    <DeleteIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default ProductItem;
