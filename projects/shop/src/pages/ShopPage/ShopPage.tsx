import React, {useEffect, useState} from "react";
import {Product} from "../../core/models/Product";
import {getPagesArray} from "../../utils/pages";
import ProductService from "../../API/ProductService";
import Products from "../../components/Products/Products";
import AppLayout from "../../containers/AppLayout/AppLayout";
import BasketButton from "../../components/BasketButton/BasketButton";

const ShopPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [totalPages, setTotalPages] = useState(1);
    const pagesArray = getPagesArray(totalPages);

    async function fetchProducts(page : number, pageSize : number) {
        const productResponse = await ProductService.getAll(page, pageSize);
        setProducts(productResponse.products);
        setTotalPages(productResponse.totalPages);
    }

    useEffect(() => {
            fetchProducts(page, 12);
        }, [page]
    )

    const changePage = (page : number) => {
        setPage(page)
    }

    return (
        <>
            <AppLayout>

                <div className="App">
                    <BasketButton />
                    <Products products={products}/>

                    <div className="Pagination">
                        {pagesArray.map(p =>
                            <button
                                onClick={() => changePage(p)}
                                className={page === p ? 'page page__current' : 'page'
                                }
                            key={p}>{p}</button>)}
                    </div>
                </div>
            </AppLayout>
        </>
    );
}

export default ShopPage;
