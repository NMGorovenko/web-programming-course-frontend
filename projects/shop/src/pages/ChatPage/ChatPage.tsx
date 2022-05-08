import React, {useEffect, useState} from 'react';
import ChatRoomElement from "./ChatRoomElement/ChatRoomElement";
import "./ChatPage.css";
import {ChatRoom} from "../../core/models/ChatRoom";
import {ChatService} from "../../core/services/ChatService";
import {useTypedSelector} from "../../hooks/useTypedSelector";

/** Chat page. */
const ChatPage = () => {
    const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);
    const { user } = useTypedSelector(state => state.auth);
    const fetchChatRooms = () => {
        const promiseWithChats = ChatService.GetChatRoomList();
        promiseWithChats
            .catch(console.error)
            .then((value) => {
                setChatRooms(value as ChatRoom[]);
            })
    }

    useEffect(() => {
        fetchChatRooms();
        console.log(chatRooms);
    }, []);


    const renderChatRooms = chatRooms.map(room =>
    {
        const subscribed = room?.followers.some(room => room?.id === user?.id);
        return <ChatRoomElement title={room.name}
                                  id={room.id}
                                  subscribed={subscribed}
                                  key={room.id}/>
    });

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
