import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import "./ChatRoom.css";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import LeaveMessage from "./LeaveMessage/LeaveMessage";

import MessageList from "./MessageList/MessageList";
import * as signalR from "@microsoft/signalr";
import {chatConnectionInstance} from "../../../core/services/ApiService";
import {DetailedMessage} from "../../../core/models/DetailedMessage";
import 'react-notifications/lib/notifications.css';

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
