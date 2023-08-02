import jwtDecode from 'jwt-decode';
import {Cookies} from "react-cookie";


const getLoggedInUser = ()=>{
    const token = getToken();

    return jwtDecode(token)?.details;
}

/**
 * Returns the Token
 */
const getToken = () => {
    const cookies = new Cookies();

    return cookies.get("token")
}

function authHeader(headers = null) {

    const token = getToken();

    if (token) {
        return {
            ...{
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin" : "*",
                'Authorization': 'Bearer ' + token,
            },
            ...headers

        };
    } else {
        return {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin" : "*",
        };
    }

}

export {authHeader , getLoggedInUser };
