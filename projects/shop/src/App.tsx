import React, {useEffect, useState} from 'react';
import './styles/app.css';
import Router from "./router";
import {BrowserRouter} from 'react-router-dom';
import {getMeRequest} from "./store/action-creators/auth";
import {useAppDispatch} from "./hooks/useTypedSelector";
import * as signalR from "@microsoft/signalr";
import {notifyConnectionInstance} from "./core/services/ApiService";
import {DetailedMessage} from "./core/models/DetailedMessage";
import {NotificationContainer, NotificationManager} from 'react-notifications';


/** App component. */
const App: React.FC = () => {
    const dispatch = useAppDispatch();
    const [ connection, setConnection] = useState<signalR.HubConnection>();

    useEffect(() => {
        setConnection(notifyConnectionInstance);
    },[]);

    useEffect(() => {
        if (connection) {
            connection.start()
                .then(result => {
                    connection.on('ReceiveNotify', (notifyMessage : string) => {
                        NotificationManager.info(notifyMessage, "New message", 800);
                    });
                })
                .catch(e => console.log('Connection failed: ', e));
        }
    }, [connection]);

    useEffect(() => {
        dispatch(getMeRequest())
            .catch(console.error);
    })

    return (
        <BrowserRouter>
            <Router />
            <NotificationContainer/>
        </BrowserRouter>
    );
};

export default App;
