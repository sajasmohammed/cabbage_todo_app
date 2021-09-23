import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reportWebVitals from './reportWebVitals';
import rootReducer from "reducers";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={createStore(rootReducer)}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

