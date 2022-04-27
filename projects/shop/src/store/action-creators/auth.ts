import {Dispatch} from "redux";
import {AuthAction, AuthActionTypes} from "../reducers/Auth/AuthTypes";
import AuthService from "../../API/AuthService";


export const loginRequest = (email : string, password : string, rememberMe : boolean) => {
    return async (dispatch : Dispatch<AuthAction>) : Promise<void> => {
        try {
            dispatch({
                type: AuthActionTypes.LOGIN_REQUEST,
            });
            await AuthService.Login({login: email, password, rememberMe});
            dispatch({
                type: AuthActionTypes.LOGIN_SUCCESS,
            })
            dispatch({
                type: AuthActionTypes.GET_ME_REQUEST,
            })
            const user = await AuthService.GetMe();
            dispatch({
                type: AuthActionTypes.GET_ME_SUCCESS,
                payload : {
                    user : {
                        ...user
                    }
                }
            })
        } catch (e) {
            dispatch({
                type: AuthActionTypes.LOGIN_ERROR,
                payload : 'login error'
            })
        }
    }
}

export const getMeRequest = () => {
    return async (dispatch : Dispatch<AuthAction>) : Promise<void> => {
        try {
            dispatch({
                type: AuthActionTypes.GET_ME_REQUEST,
            })
            const user = await AuthService.GetMe();
            dispatch({
                type: AuthActionTypes.GET_ME_SUCCESS,
                payload : {
                    user : {
                        ...user
                    }
                }
            })
        } catch (e) {
            dispatch({
                type: AuthActionTypes.GET_ME_ERROR,
                payload : 'Get me error',
            })
        }
    }
}

export const logoutRequest = () => {
    return async (dispatch : Dispatch<AuthAction>) : Promise<void> => {
        try {
            dispatch({
                type: AuthActionTypes.LOGOUT_REQUEST,
            })
            const user = await AuthService.Logout();
            dispatch({
                type: AuthActionTypes.LOGOUT_SUCCESS,
            })
        } catch (e) {
            dispatch({
                type: AuthActionTypes.GET_ME_ERROR,
                payload : 'Logout error',
            })
        }
    }
}