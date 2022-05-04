import {AuthAction, AuthActionTypes, AuthState} from "./AuthTypes";


const initialState : AuthState = {
    user : null,
    isAuthenticated : false,
    loading : false,
    error : null,

}

/** Auth reducer. */
export const authReducer = (state = initialState, action : AuthAction) : AuthState => {
    switch (action.type) {
        case AuthActionTypes.LOGIN_REQUEST:
            return {
                ...state,
                loading : true,
            }
        case AuthActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                error: null
            }
        case AuthActionTypes.LOGIN_ERROR:
            return {
                user : null,
                isAuthenticated : false,
                loading : false,
                error : action.payload
            }
        case AuthActionTypes.GET_ME_REQUEST:
            return {
                ...state,
                loading: true
            }
        case AuthActionTypes.GET_ME_SUCCESS:
            return {
                user : action.payload.user,
                isAuthenticated : true,
                loading: false,
                error: null
            }
        case AuthActionTypes.GET_ME_ERROR:
            return {
                user : null,
                isAuthenticated : false,
                loading : false,
                error : action.payload
            }
        case AuthActionTypes.LOGOUT_REQUEST:
            return {
                ...state,
                loading : true
            }
        case AuthActionTypes.LOGOUT_SUCCESS:
            return {
                user : null,
                isAuthenticated : false,
                error : null,
                loading : false
            }
        case AuthActionTypes.LOGOUT_ERROR:
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        default :
                return state
    }
}
