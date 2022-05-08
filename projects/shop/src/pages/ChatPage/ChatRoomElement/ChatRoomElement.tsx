import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import "./ChatRoomElement.css"
import SendIcon from "@mui/icons-material/Send";
import {IconButton, Switch} from "@mui/material";
import {notifyConnectionInstance} from "../../../core/services/ApiService";
import * as signalR from "@microsoft/signalr";
import {ChatService} from "../../../core/services/ChatService";

interface IProps {
    title : string;
    id : string;
    subscribed : boolean;
}

/** Chat room element. */
const ChatRoomElement : React.FC<IProps> = props => {
    const { title, id, subscribed } = props;
    const [ subscribedStatus, setSubscribedStatus ] = useState<boolean>(subscribed);

    const switcherHandler = () => {
        if (subscribedStatus) {
            unsubscribe();
        }
        else {
            subscribe();
        }
    }

    const subscribe = () => {
        ChatService.SubscribeToRoom(id)
            .catch(console.error)
            .then(() => {
                setSubscribedStatus(true);
            })
    }

    const unsubscribe = () => {
        ChatService.UnsubscribeToRoom(id)
            .catch(console.error)
            .then(() => {
                setSubscribedStatus(false);
            })
    }

    return (
        <div className={"room_element"}>
            <div className={"room_element__title"}>
                <Link to={id}>{title}</Link>
            </div>
            <div className={"room_element__population"}>

            </div>
            <Switch
                checked={subscribedStatus}
                onChange={switcherHandler}
                inputProps={{ 'aria-label': 'controlled' }}
            />
        </div>
    );
};

export default ChatRoomElement;
