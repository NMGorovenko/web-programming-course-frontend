import React, {useEffect} from 'react';
import ProductElement from "./ProductsElement/ProductElement";
import './Products.css'
import {useAppDispatch, useTypedSelector} from "../../../../hooks/useTypedSelector";
import {fetchProducts} from "../../../../store/action-creators/product";
import {getPagesArray} from "../../../../utils/pages";

/** Product list. */
const ProductList : React.FC = () => {
    const {page, pageSize, totalPages, products} = useTypedSelector(state => state.products);
    const dispatch = useAppDispatch();
    const pagesArray = getPagesArray(totalPages);
    useEffect(() => {
            dispatch(fetchProducts(page, pageSize))
                .catch(console.log);
        }, [page]
    )

    const changePage = (page : number, pageSize: number = 12 ) => {
        dispatch(fetchProducts(page, pageSize))
            .catch(console.log);
    }

    const renderProductList =
        products && products.map(product =>
            <ProductElement product={product} key={product.id} />);

    return (
        <>
            <div className='products_list'>
                {renderProductList}
            </div>

            <div className="Pagination">
                {pagesArray.map(p =>
                    <button
                        onClick={() => changePage(p)}
                        className={page === p ? 'page page__current' : 'page'
                        }
                        key={p}>{p}</button>)}
            </div>
        </>
    );
};

export default ProductList;
