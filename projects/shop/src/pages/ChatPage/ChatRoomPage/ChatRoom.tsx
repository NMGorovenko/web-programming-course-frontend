import React, {useEffect, useRef, useState} from 'react';
import {IconButton, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {useParams} from "react-router";
import "./ChatRoom.css";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import * as signalR from "@microsoft/signalr";

const ChatRoom = () => {
    const { roomId } = useParams<string>();
    const [ message, setMessage ] = useState<string>("");
    const [ connection, setConnection] = useState<signalR.HubConnection>();
    const {user} = useTypedSelector(state => state.auth);

    const [ chat, setChat ] = useState<any[]>();
    const latestChat = useRef<any>(null);

    latestChat.current = chat;

    const send = async () => {
        await connection?.send("Send", message, user?.firstName);
    }

    const sendMessage = () => {
        send()
            .catch(console.error)
            .then(() =>
        setMessage(""));
    }

    useEffect(() => {
        const connection = new signalR.HubConnectionBuilder()
            .withUrl(`${process.env.REACT_APP_API_URL}` + "/hub/chat")
            .configureLogging(signalR.LogLevel.Information)
            .build();
        console.log(connection);
        setConnection(connection);
    },[]);

    useEffect(() => {
        if (connection) {
            connection.start()
                .then(result => {
                    console.log('Connected!');

                    connection.on('Receive', message => {
                        const updatedChat = [...latestChat.current];
                        updatedChat.push(message);

                        setChat(updatedChat);
                    });
                })
                .catch(e => console.log('Connection failed: ', e));
        }
    }, [connection]);

    return (
        <div className={"chat_room"}>
            <h3 className="chat_room__name">Current room : {roomId}</h3>
            <div className={"chat_room__message_window"}>

            </div>
            <div className={"chat_room__form"}>
                <TextField
                    placeholder="message text"
                    multiline
                    minRows={1}
                    onChange={(e) => setMessage(e.target.value)}
                    fullWidth={true}
                    id={"message_input"}
                    value={message}
                />
                <IconButton onClick={sendMessage}>
                    <SendIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default ChatRoom;
