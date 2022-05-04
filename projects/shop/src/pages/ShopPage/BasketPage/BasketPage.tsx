import React from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {groupByToMap} from "../../../utils/GroupBy";
import {Product} from "../../../core/models/Product";
import ProductItem from "./ProductItem/ProductItem";
import "./BasketPage.css"

/** Basket page. */
const BasketPage : React.FC = () => {
    const {products, totalSum} = useTypedSelector(state => state.basket);

    const productsInBasketGrouped = groupByToMap<Product, string>(products, product => product.id);
    console.log(productsInBasketGrouped.values());

    const renderProducts =
        products && Array.from(productsInBasketGrouped.keys()).map(key =>
            <ProductItem product={products.find(product => product.id == key) as Product}
                         amount={(products.filter(product => product.id == key).length)}
                         key={key}
            />);

    return (
        <div className="basket_page">
            <div className="basket_page__product_list">
                {renderProducts}
            </div>
            <div className={"basket_page__total_sum"}>
                <span className={"basket_page__total_sum__total_sum"}>
                    Total sum:
                </span>
                {totalSum} ₽
            </div>
        </div>
    );
};

export default BasketPage;
