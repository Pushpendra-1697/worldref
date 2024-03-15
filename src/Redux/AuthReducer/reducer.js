import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "./actionTypes";

const token = localStorage.getItem("token") || '';
const initialAuth = {
    isLoading: false,
    isError: false,
    isAuth: !!token,
    token,
};
export const authReducer = (state = initialAuth, { type, payload }) => {
    switch (type) {
        case LOGIN_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }
        case LOGIN_SUCCESS: {
            localStorage.setItem("token", payload.token);
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                token: payload.token
            }
        }
        case LOGIN_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        case LOGOUT: {
            localStorage.removeItem('token');
            return {
                ...state,
                isAuth: false,
            }
        }
        default: {
            return state
        }
    }
};