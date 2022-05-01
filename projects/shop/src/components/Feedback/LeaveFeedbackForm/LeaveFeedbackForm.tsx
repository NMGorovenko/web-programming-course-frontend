import React, {useState} from 'react';
import {Button, Rating, TextField} from "@mui/material";
import {User} from "../../../core/models/User";
import "./LeaveFeedbackForm.css";
import FeedbackService from "../../../API/FeedbackService";

interface LeaveFeedbackFormProps {
    user : User | null,
    isAuthenticated : boolean,
    productId : string,
    fetchFeedback : (page : number) => Promise<void>,
}

const LeaveFeedbackForm : React.FC<LeaveFeedbackFormProps> = props => {
    const {isAuthenticated, user, productId, fetchFeedback} = props;
    const [estimation, setEstimation] = useState<number>(5);
    const [feedbackText, setFeedbackText] = useState<string>("");
    const firstPage = 1;

    const submitForm = () => {
        FeedbackService.PostFeedback({
            productId : productId,
            estimation : estimation,
            text : feedbackText
        }).catch(console.error)
            .then(() => {
                fetchFeedback(firstPage)
                    .catch(console.error);
            })

        fetchFeedback(firstPage)
            .catch(console.error)
            .finally();
    }

    if (!isAuthenticated){
        return (
            <>
            </>
        )
    }
    return (
        <form className="leave__feedback">
            <div className="feedback__info">
                <div className="feedback__info_wrap">
                    <div className="rating">
                        <Rating onChange={(event, value) => setEstimation(value == null ? 1 : value)} name="read-only" />
                    </div>
                </div>
            </div>
            <div className="leaveFeedback__content">
                <TextField
                    placeholder="Feedback text"
                    multiline
                    minRows={6}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    fullWidth={true}
                />
                <Button onClick={submitForm}>Submit</Button>
            </div>
        </form>
    );
};

export default LeaveFeedbackForm;