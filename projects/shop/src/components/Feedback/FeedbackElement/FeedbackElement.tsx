import React from 'react';
import {Feedback} from "../../../core/models/Feedback";
import {Rating} from "@mui/material";
import "./FeedbackElement.css"

interface FeedbackElementProps {
    feedback : Feedback
}

const FeedbackElement : React.FC<FeedbackElementProps> = (props) => {
    const {
        feedback : { id , text, estimation, feedbackUser, createdAt}
    } = props;

    const date = new Date(createdAt);
    return (
        <div className="feedback">
            <div className="feedback__info">
                <div className="feedback__info_header">
                    <span className="user_name">
                        {feedbackUser.firstName}
                    </span>
                    <span className="feedback_created_at">
                        {date.toDateString()}
                    </span>
                </div>
                <div className="feedback__info_wrap">
                    <div className="rating">
                        <Rating name="read-only" value={estimation} readOnly />
                    </div>
                </div>
            </div>
            <div className="feedback__content">
                {text}
            </div>
        </div>
    );
};

export default FeedbackElement;