import React, {useState} from 'react';
import {useAppDispatch, useTypedSelector} from "../../../hooks/useTypedSelector";
import "./style.css"
import LoginModal from "../AuthModal/LoginModal";
import { logoutRequest } from "../../../store/action-creators/auth";
import { Button } from "@mui/material";

/** Element with auth status and button for login or logout. */
const AuthShortElement = () => {
    const {isAuthenticated, user} = useTypedSelector(state => state.auth);
    const [authModel, setAuthModel]  = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const logout = () => {
        dispatch(logoutRequest())
            .catch(console.log);
        setAuthModel(false)
    }

    if (isAuthenticated && user != null){
        return (
            <div className='AuthShortElement'>
                <p>Hi, {user.firstName}</p>
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
            <LoginModal active={authModel} setActive={setAuthModel}/>
        </div>
    );
};

export default AuthShortElement;
