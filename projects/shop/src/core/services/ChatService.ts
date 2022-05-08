/** Chat service. */
import {ChatRoom} from "../models/ChatRoom";
import {axiosInstance} from "./ApiService";
import {DetailedMessage} from "../models/DetailedMessage";

/** Service for working with chats. */
const ChatService = {
    /** Get chat rooms. */
    async GetChatRoomList() : Promise<ChatRoom[]> {
        const response = await axiosInstance.get('Chat', {withCredentials: true})
        return response.data;
    },

    /** Get messages in some room. */
    async GetMessagesInRoom(roomId : string) : Promise<DetailedMessage[]> {
        const response = await axiosInstance.get('Messages/' + roomId, {withCredentials: true})
        return response.data;
    },

    /** Subscribe to the room. */
    async SubscribeToRoom(roomId : string) : Promise<void> {
        await axiosInstance.post('Chat/' + roomId, {}, {withCredentials: true})

    },

    /** Unsubscribe to the room. */
    async UnsubscribeToRoom(roomId : string) : Promise<void> {
        await axiosInstance.delete('Chat/' + roomId, {withCredentials: true})
    },

}

export {ChatService};
