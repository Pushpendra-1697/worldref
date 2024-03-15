import axios from "axios";
import { RECIPE_REQUEST_FAILURE, RECIPE_REQUEST_PENDING, RECIPE_REQUEST_SUCCESS } from "./actionTypes";

export const getRecipes = () => async (dispatch) => {
    dispatch({ type: RECIPE_REQUEST_PENDING });
    try {
        let res = await axios.get(`https://blog-database-p9we.vercel.app/recipe`);
        dispatch({ type: RECIPE_REQUEST_SUCCESS, payload: res.data });
    } catch (e) {
        dispatch({ type: RECIPE_REQUEST_FAILURE, payload: e.message });
    }
};
