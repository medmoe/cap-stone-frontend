import { combineReducers } from "redux";
import currentUserReducer from "./currentUserReducer";

const allReducers = combineReducers({
	currentUserReducer,
});

export default allReducers;
