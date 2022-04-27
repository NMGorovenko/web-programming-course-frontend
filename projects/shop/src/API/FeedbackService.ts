import axios from "axios";
import {Feedback} from "../core/models/Feedback";

interface FeedbackListResult {
    feedbackList : Feedback[]
    page : number;
    pageSize : number;
    totalPages : number;
}

export default class FeedbackService {
    private static getProductQuery = "https://localhost:5001/api/Product/";

    public static async GetFeedbackList(productId : string, page : number, pageSize : number): Promise<FeedbackListResult> {
        const query = FeedbackService.getProductQuery + productId.toString() + '/feedbacks';
        console.log(query)
        const response = await axios.get(query,
            {
                params: {
                    page: page,
                    pageSize: pageSize
                }
            })
        return {
            feedbackList: response.data["items"],
            page : response.data["metadata"]["page"],
            pageSize : response.data["metadata"]["pageSize"],
            totalPages: response.data["metadata"]["totalPages"],
        };
    }
}