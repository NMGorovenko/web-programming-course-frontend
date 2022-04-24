import React, {useState} from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import "./style.css"
import AuthModal from "../AuthModal/AuthModal";

const AuthShortElement = () => {
    const {isAuthenticated, user} = useTypedSelector(state => state.auth);
    const [authModel, setAuthModel]  = useState<boolean>(false);

    if (isAuthenticated){
        return (
            <div className='AuthShortElement'>
                <p>Hi, {user?.firstName}</p>
                <button className="auth_btn">Logout</button>
            </div>
        )
    }

    return (
        <div className='AuthShortElement'>
            <button onClick={() => setAuthModel(true)} className="auth_btn">Login</button>
            <AuthModal active={authModel} setActive={setAuthModel}/>
        </div>
    );
};

export default AuthShortElement;