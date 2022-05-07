import React from 'react';
import "./MessageElement.css";
import {DetailedMessage} from "../../../../../core/models/DetailedMessage";

interface IProps {
    message : DetailedMessage;
}

/** Message element*/
const MessageElement : React.FunctionComponent<IProps> = (props) => {
    const { message } = props;

    const createdAt = new Date(message.createdAt);
    return (
        <div className={"message_element"}>
            <div className={"message_element__header"}>
                <span>
                    <p className={"message_element__header__author"}>
                        {message.createdBy.firstName}
                    </p>
                </span>
                <span>
                    <p className={"message_element__header__created_at"}>
                        {createdAt.toLocaleString()}
                    </p>
                </span>
            </div>
            <div className={"message_element__content"}>
                <p className={"message_element__content__text"}>
                    {message.text}
                </p>
            </div>
        </div>
    );
};

export default MessageElement;
