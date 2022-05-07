import React from 'react';
import {useParams} from "react-router";
import "./ChatRoom.css";

import LeaveMessage from "./LeaveMessage/LeaveMessage";

import MessageList from "./MessageList/MessageList";

const ChatRoom : React.FC = () => {
    const { roomId } = useParams<string>();

    return (
        <div className={"chat_room"}>
            <h3 className="chat_room__name">Current room : {roomId}</h3>
            <MessageList />
            <LeaveMessage />
        </div>
    );
};

export default ChatRoom;
