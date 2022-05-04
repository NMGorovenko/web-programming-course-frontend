import axios from "axios";
import {Feedback} from "../models/Feedback";
import {axiosInstance} from "./ApiService";

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

/** Feedback service. */
const FeedbackService = {
    /** Get feedback list on some page. */
    async GetFeedbackList(productId : string, page : number, pageSize : number): Promise<FeedbackListResult> {
        const response = await axiosInstance.get('product/' + productId.toString() + '/feedbacks',
            {
                params: {
                    page: page,
                    pageSize: pageSize
                }
            });
        return {
            feedbackList: response.data["items"],
            page : response.data["metadata"]["page"],
            pageSize : response.data["metadata"]["pageSize"],
            totalPages: response.data["metadata"]["totalPages"],
        };
    },

    /** Add feedback. */
    async PostFeedback(data : FeedbackCreationData) {
        await axiosInstance.post('Product/' + data.productId.toString() + '/feedbacks',
            {
                ...data
            }, {withCredentials: true});
    },

    /** Delete feedback by id. */
    async DeleteFeedback(data : IDeleteFeedback) {
        await axiosInstance.delete('Feedback/' + data.feedbackId.toString(), {withCredentials: true});
    },

    /** Update feedback by id. */
    async UpdateFeedback(data : IUpdateFeedback) {
        await axiosInstance.put('Feedback/' + data.feedbackId.toString(), {
            ...data
        } ,{withCredentials: true});
    },
}

export {FeedbackService}
