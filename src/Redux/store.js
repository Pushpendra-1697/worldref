import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./AuthReducer/reducer";
import { recipeReducer } from "./RecipeReducer/reducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  authManager: authReducer,
  recipeManager: recipeReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

