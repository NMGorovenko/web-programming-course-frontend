import {Product} from "../core/models/Product";
import axios from "axios";

export default class ProductService {
    private static getProductQuery = "https://localhost:5001/api/Product";

    public static async getAll(page : number, pageSize : number): Promise<{totalPages: number,products: Product[]}> {
        const response = await axios.get(this.getProductQuery,
            {
                params: {
                    page: page,
                    pageSize: pageSize
                }
            })

        return {totalPages: response.data["metadata"]["totalPages"], products: response.data["items"]};
    }
}