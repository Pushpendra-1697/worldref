import axios from 'axios';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "./actionTypes";

export const login = (creds) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
        let res = await axios.post(`https://reqres.in/api/login`, creds);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    } catch (e) {
        dispatch({ type: LOGIN_FAILURE, payload: e.message });
    }
};

export const logout = () => (dispatch) => {
    dispatch({ type: LOGOUT });
};
