import {User} from "../../../core/models/User";

export enum AuthActionTypes {
    LOGIN_REQUEST = 'LOGIN_REQUEST',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_ERROR = 'LOGIN_ERROR',
    GET_ME_REQUEST = 'GET_ME_REQUEST',
    GET_ME_SUCCESS = 'GET_ME_SUCCESS',
    GET_ME_ERROR = 'GET_ME_ERROR',
    LOGOUT_REQUEST = 'LOGOUT_REQUEST',
    LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
    LOGOUT_ERROR = 'LOGOUT_ERROR'
}

export interface AuthState {
    user : null | User;
    isAuthenticated : boolean;
    loading : boolean;
    error : null | string;
}

interface LoginRequest {
    type : AuthActionTypes.LOGIN_REQUEST;
}

interface LoginSuccess {
    type : AuthActionTypes.LOGIN_SUCCESS;
}

interface LoginError {
    type : AuthActionTypes.LOGIN_ERROR;
    payload : string;
}

interface GetMeRequest {
    type : AuthActionTypes.GET_ME_REQUEST;
}

interface GetMeSuccess {
    type : AuthActionTypes.GET_ME_SUCCESS;
    payload : {
        user : User
    }
}

interface GetMeError {
    type : AuthActionTypes.GET_ME_ERROR;
    payload : string;
}

interface LogoutRequest {
    type : AuthActionTypes.LOGOUT_REQUEST;
}

interface LogoutSuccess {
    type : AuthActionTypes.LOGOUT_SUCCESS;
}

interface LogoutError {
    type : AuthActionTypes.LOGOUT_ERROR;
    payload : string;
}

export type AuthAction = LoginRequest | LoginSuccess | LoginError |
                         GetMeRequest | GetMeSuccess | GetMeError |
                         LogoutRequest | LogoutSuccess | LogoutError;