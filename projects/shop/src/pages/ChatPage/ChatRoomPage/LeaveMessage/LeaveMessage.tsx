import React, {useEffect, useState} from 'react';
import "./LeaveMessage.css";
import {IconButton, TextField} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {useParams} from "react-router";
import * as signalR from "@microsoft/signalr";
import {connectionInstance} from "../../../../core/services/ApiService";
import {DetailedMessage} from "../../../../core/models/DetailedMessage";

const LeaveMessage = () => {
    const { roomId } = useParams<string>();
    const [ sendMessage, setSendMessage ] = useState<string>("");
    const [ connection, setConnection] = useState<signalR.HubConnection>();

    useEffect(() => {
        setConnection(connectionInstance);
    },[]);


    const send = () => {
        connection?.send("Send", {Text: sendMessage, ChatRoomId: roomId})
            .catch(console.error)
            .then(() =>
                setSendMessage(""));
    }

    return (
        <div className={"chat_room__form"}>
            <TextField
                placeholder="message text"
                multiline
                minRows={1}
                onChange={(e) => setSendMessage(e.target.value)}
                fullWidth={true}
                id={"message_input"}
                value={sendMessage}
            />
            <IconButton onClick={send}>
                <SendIcon />
            </IconButton>
        </div>
    );
};

export default LeaveMessage;
