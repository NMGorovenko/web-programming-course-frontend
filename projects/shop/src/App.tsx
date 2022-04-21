import React, {useEffect, useState} from 'react';
import './styles/app.css';
import Products from "./components/Products/Products";
import ProductService from "./API/ProductService";
import {Product} from "./core/models/Product";
import {getPagesArray} from "./utils/pages";

function App() {
    const [products, setProducts] = useState<Product[]>([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(20);
    const [totalPages, setTotalPages] = useState(1);
    const pagesArray = getPagesArray(totalPages);

    async function fetchProducts(page : number, pageSize : number) {
        const productResponse = await ProductService.getAll(page, pageSize);
        setProducts(productResponse.products);
        setTotalPages(productResponse.totalPages);
    }

    useEffect(() => {
        fetchProducts(page, 20).finally();
        }, [page]
    )

    const changePage = (page : number) => {
        setPage(page)
    }

  return (
    <div className="App">
        <Products products={products}/>

        <div className="Pagination">
            {pagesArray.map(p =>
                <button
                    onClick={() => changePage(p)}
                    className={page === p ? 'page page__current' : 'page'
                }>{p}</button>)}
        </div>

    </div>
  );
}

export default App;
