import React from 'react';
import {Link} from "react-router-dom";
import "./ChatRoomElement.css"
interface IProps {
    title : string;
    id : string;
}

/** Chat room element. */
const ChatRoomElement : React.FC<IProps> = props => {
    const {title, id} = props;
    return (
        <div className={"room_element"}>
            <div className={"room_element__title"}>
                <Link to={id}>{title}</Link>
            </div>
            <div className={"room_element__population"}>

            </div>
        </div>
    );
};

export default ChatRoomElement;
