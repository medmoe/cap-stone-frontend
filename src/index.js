import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import "./index.css";
import axios from "axios";

//Redux
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
//Reducer
import allReducers from "./Redux/Reducers/index";
//MiddleWare
import { composeWithDevTools } from "redux-devtools-extension";
import loggingMiddleware from "redux-logger";
import thunkMiddleware from "redux-thunk";

// React-Router
import { BrowserRouter } from "react-router-dom";

export const store = createStore(
	allReducers,
	composeWithDevTools(
		applyMiddleware(
			loggingMiddleware,
			thunkMiddleware.withExtraArgument({ axios })
		)
	)
);

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
