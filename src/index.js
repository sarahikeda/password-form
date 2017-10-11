import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import {appStore} from "./core/stores/app.store";
import "../styles/App/App.css";



ReactDOM.render(
	<App resource={appStore} />,
	document.getElementById("root")
);
