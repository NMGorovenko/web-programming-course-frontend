import {Product} from "../models/Product";
import axios from "axios";
import {axiosInstance} from "./ApiService";

interface ProductListResult {
    products : Product[];
    page : number;
    pageSize : number;
    totalPages : number;
}

interface ProductElementResult {
    product : Product;
}

/** Product service. */
const ProductService = {
    /** Get all products on some page. */
    async getAll(page : number, pageSize : number): Promise<ProductListResult> {
        const response = await axiosInstance.get('/Product',
            {
                params: {
                    page: page,
                    pageSize: pageSize
                }
            })
        return {
            products: response.data["items"],
            page : response.data["metadata"]["page"],
            pageSize : response.data["metadata"]["pageSize"],
            totalPages: response.data["metadata"]["totalPages"],
        };
    },

    /** Get product by id. */
    async getProduct(id : string): Promise<ProductElementResult> {
        const response = await axiosInstance.get(`/Product/${id}`, {
        });

        return {
            product : response.data
        };
    },
}

export {ProductService};
