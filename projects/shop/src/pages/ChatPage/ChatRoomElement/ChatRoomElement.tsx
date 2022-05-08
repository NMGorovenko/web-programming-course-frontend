import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import "./ChatRoomElement.css"
import SendIcon from "@mui/icons-material/Send";
import {IconButton, Switch} from "@mui/material";
import {notifyConnectionInstance} from "../../../core/services/ApiService";
import * as signalR from "@microsoft/signalr";

interface IProps {
    title : string;
    id : string;
    subscribed : boolean;
}

/** Chat room element. */
const ChatRoomElement : React.FC<IProps> = props => {
    const {title, id, subscribed } = props;
    const [ subscribedStatus, isSubscribedStatus ] = useState<boolean>(subscribed);
    const [ connection, setConnection ] = useState<signalR.HubConnection>();
    useEffect(() => {
        setConnection(notifyConnectionInstance);
    },[]);

    const subscribe = () => {
        connection?.send("Subscribe", { ChatRoomId : id } )
            .catch(console.error)
            .then(() =>{
                isSubscribedStatus(!subscribedStatus)
            });
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
                onChange={subscribe}
                inputProps={{ 'aria-label': 'controlled' }}
            />
        </div>
    );
};

export default ChatRoomElement;
