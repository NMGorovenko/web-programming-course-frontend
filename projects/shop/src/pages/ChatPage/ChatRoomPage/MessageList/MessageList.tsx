import React, {useEffect, useState} from 'react';
import "./MessageList.css";
import {useParams} from "react-router";
import * as signalR from "@microsoft/signalr";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {DetailedMessage} from "../../../../core/models/DetailedMessage";
import {ChatService} from "../../../../core/services/ChatService";
import {chatConnectionInstance} from "../../../../core/services/ApiService";
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
        setConnection(chatConnectionInstance);
    },[]);

    useEffect(() => {
        if (connection) {
            connection.start()
                .then(result => {
                    connection?.send("Join",  {ChatRoomId : roomId})
                        .catch(console.error)
                        .then(() => {
                            console.log("Connect to channel: " + roomId);
                            // Somebody join the channel.
                        });
                    NotificationManager.success('Connected!', "Connection to server", 400);
                    connection.on('Receive', (receiveMessage : DetailedMessage) => {
                        AddMessage(receiveMessage);
                    });
                    connection.on('Notify', (notifyMessage : string) => {
                        console.log(notifyMessage);
                        NotificationManager.info(notifyMessage, "Someone connect", 800);
                    });
                })
                .catch(e => console.log('Connection failed: ', e));


            return() => {
                connection?.send("Left", { ChatRoomId : roomId })
                    .catch(console.error)
                    .then(() => {
                        connection?.stop()
                            .catch(console.error)
                            .then(() => {
                                console.log("You are left form " + roomId);
                            });
                    });
            }
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
                return new Date(y.createdAt).getTime() - new Date(x.createdAt).getTime()
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
