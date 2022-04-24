import React, {useEffect} from 'react';
import ProductElement from "./ProductsElement/ProductElement";
import {Product} from "../../core/models/Product";
import './Products.css'
import {AppDispatch, useAppDispatch, useTypedSelector} from "../../hooks/useTypedSelector";
import {fetchProducts} from "../../store/action-creators/product";
import ProductsPagination from "./productsPagination/productsPagination";


const Products : React.FC = () => {
    const {page, pageSize, products} = useTypedSelector(state => state.products);
    const dispatch : AppDispatch = useAppDispatch();

    useEffect(() => {
            dispatch(fetchProducts(page, pageSize));
        }, [page]
    )

    const renderProductList =
        products && products.map(product =>
            <ProductElement product={product} key={product.id} />);

    return (
        <>
            <div className='products_list'>
                {renderProductList}
            </div>
            <ProductsPagination />
        </>
    );
};

export default Products;