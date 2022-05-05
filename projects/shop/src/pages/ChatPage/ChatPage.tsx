import React, {useEffect, useState} from 'react';
import ChatRoomElement from "./ChatRoomElement/ChatRoomElement";
import "./ChatPage.css";
import {ChatRoom} from "../../core/models/ChatRoom";
import {ChatService} from "../../core/services/ChatService";

/** Chat page. */
const ChatPage = () => {
    const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);

    const fetchChatRooms = () => {
        const promisWithChats = ChatService.GetChatRoomList();
        promisWithChats
            .catch(console.error)
            .then((value) => {
                setChatRooms(value as ChatRoom[]);
            })
    }

    useEffect(() => {
        fetchChatRooms();
    }, []);

    const renderChatRooms = chatRooms.map(room => <ChatRoomElement title={room.name} id={room.id} key={room.id}/>);
    return (
        <div className={"chat_page"}>
            <h3>Chat rooms: </h3>
            <div className={"chat_page__rooms"}>
                {renderChatRooms}
            </div>
        </div>
    );
};

export default ChatPage;
