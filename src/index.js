<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './styles/css/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
=======
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import {appStore} from "./core/stores/app.store";
import "../styles/App/App.css";


>>>>>>> 7e2871f9e8061325f3e123967231bf542c0de9d3

ReactDOM.render(
	<App appStore={appStore} />,
	document.getElementById("root")
);
