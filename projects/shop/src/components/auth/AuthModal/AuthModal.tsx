import React, {Dispatch, useState} from 'react';
import './style.css';
import {useDispatch} from "react-redux";
import {loginRequest} from "../../../store/action-creators/auth";
import {useAppDispatch} from "../../../hooks/useTypedSelector";
import {BasketAction} from "../../../store/reducers/Basket/BasketTypes";
import {AuthAction} from "../../../store/reducers/Auth/AuthTypes";

interface ModalProps {
    active : boolean,
    setActive : Dispatch<React.SetStateAction<boolean>>
}

const AuthModal = (props : ModalProps) => {
    const {active, setActive} = props;

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const dispatch = useAppDispatch();

    const login = () => {
        console.log(email);
        console.log(password);
        dispatch(loginRequest(email, password, false));
    }
    return (
        <div className={active ? "auth_modal active" : "auth_modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <div className="form_auth_style">
                    <label>Email: </label>
                    <input type="email" name="auth_email" placeholder="example@sfu.com" onChange={(e) => setEmail(e.target.value)} required />
                    <label>Password: </label>
                    <input type="password" name="auth_pass" placeholder="password" onChange={(e) => setPassword(e.target.value)} required />
                    <button className="form_auth_button" name="form_auth_submit" onClick={login}>Login</button>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;