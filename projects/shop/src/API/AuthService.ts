import axios from "axios";

interface UserResult {
    id : string;
    firstName : string;
}

export interface LoginData {
    login : string;
    password : string;
    rememberMe : boolean;
}

export default class AuthService{
    private static authUrl = "https://localhost:5001/api/Auth"
    private static getMeUrl = "https://localhost:5001/api/Auth"
    private static logout = "https://localhost:5001/api/Auth"

    public static async Login(login : LoginData){
        const response = await axios.post(this.authUrl,
            {
                ...login
            }, {withCredentials: true}, )
    }

    public static async GetMe() : Promise<UserResult> {
        const response = await axios.get(this.getMeUrl, {withCredentials: true});
        return {
            id : response.data['id'],
            firstName : response.data['firstName'],
        };
    }


    public static async Logout(){
        await axios.delete(this.logout, {withCredentials: true});
    }
}