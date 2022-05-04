import React, {useState} from 'react';
import {Feedback} from "../../../../../core/models/Feedback";
import {Button, IconButton, Rating, TextField} from "@mui/material";
import "./FeedbackElement.css"
import {useTypedSelector} from "../../../../../hooks/useTypedSelector";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {FeedbackService} from "../../../../../core/services/FeedbackService";


interface FeedbackElementProps {
    feedback : Feedback;
    fetchFeedback : (page : number) => Promise<void>;
}

const FeedbackElement : React.FC<FeedbackElementProps> = (props) => {
    const {
        feedback : { id , text, estimation, feedbackUser, createdAt}
    } = props;

    const { fetchFeedback } = props;
    const { user, isAuthenticated } = useTypedSelector(state => state.auth);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [editEstimation, setEditEstimation] = useState<number>(estimation);
    const [editFeedbackText, setEditFeedbackText] = useState<string>(text);
    const isEditable = isAuthenticated && user != null && user.id == feedbackUser.id;
    const { page } = useTypedSelector(state => state.products);

    const updateFeedback = () => {
        FeedbackService.UpdateFeedback({feedbackId : id,
            text : editFeedbackText,
            estimation : editEstimation,
        })
            .catch(console.log)
            .then(() => {
                setIsEdit(false);
                fetchFeedback(page)
                    .catch(console.error);
            });
    }

    const removeFeedback = () => {
        FeedbackService.DeleteFeedback({feedbackId : id})
            .catch(console.log)
            .then(() => {
                fetchFeedback(page)
                    .catch(console.error);
            });
    }

    const editable =
        <>
            <IconButton onClick={removeFeedback}>
                <DeleteIcon />
            </IconButton>
            <IconButton onClick={() => setIsEdit(!isEdit)}>
                <EditIcon />
            </IconButton>
        </>;

    const date = new Date(createdAt);

    if (isEdit){
        return (
            <div className="feedback">
                <div className="feedback__info">
                    <div className="feedback__info_header">
                    <span className="user_name">
                        {feedbackUser.firstName}
                        {isEditable ? editable : <></>}
                    </span>
                        <span className="feedback_created_at">
                        {date.toDateString()}
                    </span>
                    </div>
                    <div className="feedback__info_wrap">
                        <div className="rating">
                            <Rating value={editEstimation} onChange={(event, value) => setEditEstimation(value == null ? 1 : value)} name="read-only" />
                        </div>
                    </div>
                </div>
                <div className="feedback__content">
                    <TextField
                        placeholder="Feedback text"
                        multiline
                        minRows={6}
                        onChange={(e) => setEditFeedbackText(e.target.value)}
                        fullWidth={true}
                        defaultValue={editFeedbackText}
                    />
                </div>
                <Button onClick={updateFeedback}>Update</Button>
            </div>
        )
    }

    return (
        <div className="feedback">
            <div className="feedback__info">
                <div className="feedback__info_header">
                    <span className="user_name">
                        {feedbackUser.firstName}
                        {isEditable ? editable : <></>}
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
