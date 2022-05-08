import React, {useEffect, useState} from 'react';
import "./LeaveMessage.css";
import {IconButton, TextField} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {useParams} from "react-router";
import * as signalR from "@microsoft/signalr";
import {chatConnectionInstance} from "../../../../core/services/ApiService";
import {DetailedMessage} from "../../../../core/models/DetailedMessage";

/** Component for leave message. */
const LeaveMessage = () => {
    const { roomId } = useParams<string>();
    const [ sendMessage, setSendMessage ] = useState<string>("");
    const [ connection, setConnection] = useState<signalR.HubConnection>();

    useEffect(() => {
        const listener = event => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                event.preventDefault();
                send();
            }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    }, [sendMessage]);


    useEffect(() => {
        setConnection(chatConnectionInstance);
    },[]);


    const send = () => {
        connection?.send("Send", { Text: sendMessage, ChatRoomId: roomId })
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
