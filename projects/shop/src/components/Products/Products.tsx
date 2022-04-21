import React from 'react';
import ProductElement from "./ProductsElement/ProductElement";
import {Product} from "../../core/models/Product";
import './Products.css'

interface ProductsProps {
    products: Product[] | null;
}

const Products:React.FC<ProductsProps> = props => {
    const { products } = props;

    const renderProductList =
        products && products.map(product =>
            <ProductElement product={product} key={product.id} />);

    return (
        <div className='products_list'>
            {renderProductList}
        </div>
    );
};

export default Products;