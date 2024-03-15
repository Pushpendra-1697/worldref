import { RECIPE_REQUEST_FAILURE, RECIPE_REQUEST_PENDING, RECIPE_REQUEST_SUCCESS } from "./actionTypes";

const initialRecipe = {
    isLoading: false,
    isError: false,
    recipe: []
};
export const recipeReducer = (state = initialRecipe, { type, payload }) => {
    switch (type) {
        case RECIPE_REQUEST_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                recipe: payload
            }
        }
        case RECIPE_REQUEST_PENDING: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }
        case RECIPE_REQUEST_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        default: {
            return state
        }
    }
};