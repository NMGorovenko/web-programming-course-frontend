import React from 'react';
import "./style.css"
import {useSelector} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const BasketButton : React.FC = () => {
    const {products, totalSum, error} = useTypedSelector(state => state.basket)

    return (
        <button className="basket_btn">
            <div className="total_cost">
                <span>
                    {totalSum}
                </span>
            </div>
            <div className="amount_items_section">
                <p className="amount_items">{products.length}</p>
                <img className="basket_icon" src="/assets/img/svg/basket.svg"/>
            </div>
        </button>
    );
};

export default BasketButton;