import React from 'react';
import './styles/app.css';
import Router from "./router";
import { BrowserRouter } from 'react-router-dom';

import {store} from "./store";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
};

export default App;