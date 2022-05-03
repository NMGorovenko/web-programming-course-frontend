import React, {useEffect, useState} from 'react';
import {Feedback} from "../../core/models/Feedback";
import FeedbackService from "../../API/FeedbackService";
import {getPagesArray} from "../../utils/pages";
import FeedbackElement from "./FeedbackElement/FeedbackElement";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import LeaveFeedbackForm from "./LeaveFeedbackForm/LeaveFeedbackForm";

interface FeedbackListProps {
    productId : string
}
const FeedbackList : React.FC<FeedbackListProps> = (props) => {

    const { productId } = props;
    const [ feedbackList, setFeedbackList ] = useState<Array<Feedback>>(new Array<Feedback>());
    const { user, isAuthenticated } = useTypedSelector(state => state.auth);

    const [page, setPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(10);
    const [totalPages, setTotalPages] = useState<number>(0);

    const fetchFeedbacks = async (page : number) => {
        try{
            const result = await FeedbackService.GetFeedbackList(productId, page, pageSize);
            setTotalPages(result.totalPages);
            setFeedbackList(result.feedbackList);
            setPage(result.page);
        }
        catch (e){
            console.log(e)
        }
    }

    const changePage = async (page : number, pageSize: number = 10 ) => {
        await fetchFeedbacks(page);
    }

    useEffect(() => {
        fetchFeedbacks(page)
            .catch(console.error)
    }, [page]);

    const pagesArray = getPagesArray(totalPages);

    const renderFeedbackList =
        feedbackList && feedbackList.map(feedback =>
            <FeedbackElement key={feedback.id}
                             feedback={feedback}
                             fetchFeedback={fetchFeedbacks}
            />)

    return (
        <div>
            <h2>FEEDBACKS:</h2>
            <LeaveFeedbackForm productId={productId}
                               user={user}
                               isAuthenticated={isAuthenticated}
                               fetchFeedback={fetchFeedbacks}
            />
            {renderFeedbackList}
            <div className="Pagination">
                {pagesArray.map(p =>
                    <button
                        onClick={() => changePage(p)}
                        className={page === p ? 'page page__current' : 'page'
                        }
                        key={p}>{p}
                    </button>)}
            </div>
        </div>
    );
};

export default FeedbackList;