import {Product} from "../core/models/Product";
import axios from "axios";

interface ProductsResult {
    products : Product[];
    page : number;
    pageSize : number;
    totalPages : number;
}

export default class ProductService {
    private static getProductQuery = "https://localhost:5001/api/Product";

    public static async getAll(page : number, pageSize : number): Promise<ProductsResult> {
        const response = await axios.get(this.getProductQuery,
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
    }
}