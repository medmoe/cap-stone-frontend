import { combineReducers } from "redux";
import currentUserReducer from "./currentUserReducer";
import isLoginReducer from "./loginReducer";

const allReducers = combineReducers({
	currentUserReducer,
	isLoginReducer,
});

export default allReducers;
