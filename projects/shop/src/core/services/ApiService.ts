import axios from "axios";
import * as signalR from "@microsoft/signalr";


const axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
    headers: { 'Content-Type': 'application/json' },
    timeout: 60 * 1000,
});

const connectionInstance = new signalR.HubConnectionBuilder()
    .withUrl(`${process.env.REACT_APP_API_URL}` + "/hub/chat")
    .configureLogging(signalR.LogLevel.Information)
    .build();

export {axiosInstance, connectionInstance}
