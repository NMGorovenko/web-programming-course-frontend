import React, {useState} from 'react';
import {useAppDispatch, useTypedSelector} from "../../../hooks/useTypedSelector";
import "./style.css"
import AuthModal from "../AuthModal/AuthModal";
import {loginRequest, logoutRequest} from "../../../store/action-creators/auth";
import {Button} from "@mui/material";

const AuthShortElement = () => {
    const {isAuthenticated, user} = useTypedSelector(state => state.auth);
    const [authModel, setAuthModel]  = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const logout = () => {
        dispatch(logoutRequest());
        setAuthModel(false)
    }

    if (isAuthenticated){
        return (
            <div className='AuthShortElement'>
                <p>Hi, {user?.firstName}</p>
                <Button onClick={logout} color="inherit">
                    Logout
                </Button>
            </div>
        )
    }

    return (
        <div className='AuthShortElement'>
            <Button onClick={() => setAuthModel(true)} color="inherit">
                Login
            </Button>
            <AuthModal active={authModel} setActive={setAuthModel}/>
        </div>
    );
};

export default AuthShortElement;