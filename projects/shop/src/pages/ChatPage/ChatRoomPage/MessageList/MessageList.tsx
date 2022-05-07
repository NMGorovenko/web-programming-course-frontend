import React, {useEffect, useState} from 'react';
import "./MessageList.css";
import {useParams} from "react-router";
import * as signalR from "@microsoft/signalr";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {DetailedMessage} from "../../../../core/models/DetailedMessage";
import {ChatService} from "../../../../core/services/ChatService";
import {connectionInstance} from "../../../../core/services/ApiService";
import MessageElement from "./MessageElement/MessageElement";

const MessageList = () => {
    const { roomId } = useParams<string>();
    const [ connection, setConnection] = useState<signalR.HubConnection>();
    const [ messages, setMessages ] = useState<DetailedMessage[]>([]);

    const AddMessage = (newMessage : DetailedMessage) => {
        setMessages((prevMessages : DetailedMessage[]) => [
            ...prevMessages,
            newMessage,
        ]);
    }

    useEffect(() => {
        setConnection(connectionInstance);
    },[]);

    useEffect(() => {
        if (connection) {
            connection.start()
                .then(result => {
                    console.log('Connected!');
                    connection.on('Receive', (receiveMessage : DetailedMessage) => {
                        AddMessage(receiveMessage);
                    });
                })
                .catch(e => console.log('Connection failed: ', e));
        }
    }, [connection]);

    useEffect(() => {
        ChatService.GetMessagesInRoom(roomId)
            .then((result) => {
                console.log(result);
                setMessages((prevMessages : DetailedMessage[]) => [
                    ...prevMessages,
                    ...result,
                ]);
            });
    }, []);

    const renderMessageList =
        messages && messages
            .sort((x, y) => {
                return new Date(x.createdAt).getTime() - new Date(y.createdAt).getTime()
            })
            .map(mes =>
            <MessageElement
                key={mes.id}
                message={mes}
            />
        );

    return (
        <div className={"chat_room__message_window"}>
            {renderMessageList}
        </div>
    );
};

export default MessageList;
