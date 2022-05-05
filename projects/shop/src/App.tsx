import React, {useEffect} from 'react';
import './styles/app.css';
import Router from "./router";
import {BrowserRouter} from 'react-router-dom';
import {getMeRequest} from "./store/action-creators/auth";
import {useAppDispatch} from "./hooks/useTypedSelector";

/** App component. */
const App: React.FC = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getMeRequest())
            .catch(console.error);
    })

    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
};

export default App;
