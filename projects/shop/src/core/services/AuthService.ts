import axios from "axios";
import {axiosInstance} from "./ApiService";

interface UserResult {
    id : string;
    firstName : string;
}

interface LoginData {
    login : string;
    password : string;
    rememberMe : boolean;
}

/** Auth service */
const AuthService = {

    /** Login. */
    async Login(login : LoginData){
        await axiosInstance.post('Auth',
            {
                ...login
            }, {withCredentials: true}, )
    },

    /** Get me. */
    async GetMe() : Promise<UserResult> {
        const response = await axiosInstance.get('Auth', {withCredentials: true});
        return {
            id : response.data['id'],
            firstName : response.data['firstName'],
        };
    },

    /** Logout. */
    async Logout(){
        await axiosInstance.delete('Auth', {withCredentials: true});
    },
}
export {AuthService}
