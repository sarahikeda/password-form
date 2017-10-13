
import './styles/css/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import {appStore} from "./core/stores/app.store";
import "../styles/App/App.css";


ReactDOM.render(
	<App appStore={appStore} />,
	document.getElementById("root")
);
