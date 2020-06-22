import { LOGIN_FETCH_USER_DATA, LOGIN_SUCCESS, LOGOUT, LOGIN_FAIL } from '../actions/ActionsTypes'


const initialState = {
    isfetching: true,
    isAuthenticated: false,
    error: '',
    token: null
}


const AuthenticateReducer = ( state = initialState, action ) => {

    const {type, payload} = action;

    switch (type) {
        case LOGIN_FETCH_USER_DATA:
            return {
                ...state,
                isfetching: true
            };

        case LOGIN_SUCCESS:
            localStorage.setItem('token', 'test-token');
            return {
                ...state,
                isfetching: false,
                isAuthenticated: true,
                token: payload
            };

        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                isfetching: true,
                isAuthenticated: false
            };

        case LOGIN_FAIL:
            return {
                ...state,
                isfetching: true,
                isAuthenticated: false,
                error: payload
            };


        default:
            return state;

    }

};

export default AuthenticateReducer;