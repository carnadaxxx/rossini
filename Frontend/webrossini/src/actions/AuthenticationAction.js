import axios from 'axios';
import {LOGIN_FETCH_USER_DATA ,LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT} from './ActionsTypes'


export const loginRequest = () => {
    return {
        type: LOGIN_FETCH_USER_DATA
    }
}

export const login = (auth) => {

    return {
        type: LOGIN_SUCCESS,
        payload: auth
    }
}


export const loginFail = (error) => {
    return {
        type: LOGIN_FAIL,
        payload: error
    }
}


export const logout = () => {

    return {
        type: LOGOUT
    }
}

export const getLoginData = ()  => {

    return (dispatch) => {
        dispatch(loginRequest);
        const url = 'http://localhost:8000/api-token/';
        // const body = JSON.stringify(email, password);
        const body = {"email": "w.coronadobarrantes@gmail.com", "password": "estrellaxxx000"};
        const conf = {headers: {"Accept": "application/json"}};

        axios.post(url, body, conf).then(response => {
            const auth = response.data;
            dispatch(login(auth));
        }).catch(error => {
                const errorMsg = error.message;
                dispatch(loginFail(errorMsg))
            }
        );
    }
}