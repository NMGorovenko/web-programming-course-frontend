import React from 'react';
import "./style.css"
import {useSelector} from "react-redux";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {Link} from "react-router-dom";

/** Component with basket total sum and link to basket page. */
const BasketButton : React.FC = () => {
    const {products, totalSum, error} = useTypedSelector(state => state.basket)

    return (
        <Link to={"/basket"}>
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
        </Link>
    );
};

export default BasketButton;
