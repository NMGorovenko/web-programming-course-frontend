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

interface IDeleteFeedback {
    feedbackId : string;
}

interface IUpdateFeedback {
    feedbackId : string;
    text : string;
    estimation : number;
}

export default class FeedbackService {
    private static productQuery = "https://localhost:5001/api/Product/";
    private static feedbackApi = "https://localhost:5001/api/Feedback/";
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


    /** Delete feedback by id. */
    public static async DeleteFeedback(data : IDeleteFeedback) {
        const query = FeedbackService.feedbackApi + data.feedbackId.toString();
        await axios.delete(query, {withCredentials: true});
    }

    /** Update feedback by id. */
    public static async UpdateFeedback(data : IUpdateFeedback) {
        const query = FeedbackService.feedbackApi + data.feedbackId.toString();
        await axios.put(query, {
            ...data
        } ,{withCredentials: true});
    }
}