/** Chat service. */
import {ChatRoom} from "../models/ChatRoom";
import {axiosInstance} from "./ApiService";


const ChatService = {

    async GetChatRoomList() : Promise<ChatRoom[]> {
        const response = await axiosInstance.get('Chat', {withCredentials: true})
        return response.data;
    }
}

export {ChatService};
