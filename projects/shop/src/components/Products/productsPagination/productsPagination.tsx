import React, {useEffect} from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {getPagesArray} from "../../../utils/pages";
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";
import {ProductsAction} from "../../../store/reducers/Product/ProductsTypes";
import {fetchProducts} from "../../../store/action-creators/product";

const ProductsPagination : React.FC = ()  => {
    const {totalPages, page} = useTypedSelector(state => state.products);
    const pagesArray = getPagesArray(totalPages);
    const dispatch = useDispatch<Dispatch<ProductsAction>>();

    const changePage = (page : number, pageSize: number = 8 ) => {
        fetchProducts(page, pageSize)
    }

    return (
        <div className="Pagination">
            {pagesArray.map(p =>
                <button
                    onClick={() => changePage(p)}
                    className={page === p ? 'page page__current' : 'page'
                    }
                    key={p}>{p}</button>)}
        </div>
    );
};

export default ProductsPagination;