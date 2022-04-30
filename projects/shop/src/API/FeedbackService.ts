import axios from "axios";
import {Feedback} from "../core/models/Feedback";

interface FeedbackListResult {
    feedbackList : Feedback[]
    page : number;
    pageSize : number;
    totalPages : number;
}

interface FeedbackCreationData {
    text : string;
    estimation : number;
    productId : string;
}

export default class FeedbackService {
    private static productQuery = "https://localhost:5001/api/Product/";

    public static async GetFeedbackList(productId : string, page : number, pageSize : number): Promise<FeedbackListResult> {
        const query = FeedbackService.productQuery + productId.toString() + '/feedbacks';
        const response = await axios.get(query,
            {
                params: {
                    page: page,
                    pageSize: pageSize
                }
            });
        console.log(response)
        return {
            feedbackList: response.data["items"],
            page : response.data["metadata"]["page"],
            pageSize : response.data["metadata"]["pageSize"],
            totalPages: response.data["metadata"]["totalPages"],
        };
    }

    public static async PostFeedback(data : FeedbackCreationData) {
        const query = FeedbackService.productQuery + data.productId.toString() + '/feedbacks';
        await axios.post(query,
            {
                ...data
            }, {withCredentials: true});
    }
}